import mongoose from 'mongoose';

const macroRoutes = app => {
  const User = mongoose.model('users');

  function buildDeductMacroObj({ macroType, macroAmount }) {
    if (macroType === 'protein') return { 'macros.proteinCount': -macroAmount };
    if (macroType === 'fat') return { 'macros.fatCount': -macroAmount };
    if (macroType === 'carb') return { 'macros.carbCount': -macroAmount };
  }

  function buildAddMacroObj({ macroType, macroAmount }) {
    if (macroType === 'protein') return { 'macros.proteinCount': macroAmount };
    if (macroType === 'fat') return { 'macros.fatCount': macroAmount };
    if (macroType === 'carb') return { 'macros.carbCount': macroAmount };
  }

  app.get('/api/fetch_macros', async (request, response) => {
    const { id } = request.user;
    const { macros: userMacros } = await User.findById(id);
    response.send(userMacros);
  });

  app.post('/api/deduct_macro', async (request, response) => {
    const { id } = request.user;
    const { macroAmount, macroType } = request.body;
    const macroObj = buildDeductMacroObj({ macroAmount, macroType });
    const user = await User.findByIdAndUpdate(
      id,
      { $inc: macroObj },
      { new: true }
    );
    response.send(user);
  });

  app.post('/api/add_macro', async (request, response) => {
    const { id } = request.user;
    const { macroAmount, macroType } = request.body;
    const macroObj = buildAddMacroObj({ macroAmount, macroType });
    const user = await User.findByIdAndUpdate(
      id,
      { $inc: macroObj },
      { new: true }
    );
    response.send(user);
  });
};

export default macroRoutes;
