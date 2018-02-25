import React from 'react';

const LandingPage = () => (
  <div className="row">
    <h1>Dietary Notes</h1>
    <p>
      The changes you'll see in the mirror will be slower than if we went for a
      straight cut, so we'll need to track both strength increases and body
      measurements carefully. We'll aim for an average, fat loss rate of
      1.25-1.5lbs a week. The scale weight may reflect a little less as muscle
      is put on but the measurements on the stomach will tell us that we are
      heading in the right direction.
    </p>
    <div className="div-spacing text-center">
      <h2>Protein (P), Carbs (C), Fat (F). Numbers in grams.</h2>
      <h4>Training Day Food - 3 days a week. High Carb, LOW fat.</h4>
      <ul>
        <li>P: 160</li>
        <li>C: 195</li>
        <li>F: 55</li>
      </ul>
      <h4>Non-Training Day Food - 4 Days a Week. Low Carb, HighER fat.</h4>
      <ul>
        <li>P: 160</li>
        <li>C: 25</li>
        <li>F: 80</li>
      </ul>
    </div>
    <h2>Rules and Important Nutrition Points</h2>
    <ol>
      <li>
        Only count starchy carbs. (Bread, Rice, Pasta, Potato, Fruit etc.)
      </li>
      <li>Vegetables -don't count against your carb number*.</li>
      <li>
        <b>EAT VEGETABLES WITH EVERY MEAL TO SLOW DIGESTION</b>, fill the
        stomach and for the micronutrients. Unless you are eating an
        extraordinary amount*, don't count the carbs in leafy green vegetables.
        (*You would have to make an active effort to try and screw up your diet
        to reach an "extraordinary amount".) Of course, don't make the mistake
        of salad dressings and mayonnaise. *Exceptions: Carrots, Peas and Corn,
        Potatoes, Parsnips (as they are starchy vegetables). Look them up here.
        <b> Vegetables are not optional. They are required.</b>
      </li>
    </ol>
    <h2>
      What is simple and painless to prepare and eat? Here's my personal list:
    </h2>
    <ul className="text-center">
      <li>Cucumbers</li>
      <li>broccoli</li>
      <li>peppers</li>
      <li>spinach</li>
      <li>cabbage</li>
    </ul>
    <h2 className="macroHeaders">Fruit</h2>
    <h5 className="macroHeaders">-count.</h5>
    <p>
      Consider one 'medium' sized piece of fruit (apple, banana, pear, orange
      etc.) to be 25g of carbs. A notable exception to the 25g rule are grapes
      and raisins which will need to be checked. Berries are fine too but they
      will need to be checked also. Here's a good nutritional table for{' '}
      <a href="http://www.veganpeace.com/nutrient_information/nutrient_content_tables/display_tables/fruits/fruits.htm">
        fruit
      </a>. <strong>Eat whole fruit!</strong>
    </p>
    <h2 className="macroHeaders">Starchy Carbs</h2>
    <h5 className="macroHeaders">-count.</h5>
    <p>
      Vegetables and fruits should be prioritized. Starchy carbs are the last
      thing to be added in. Generally speaking the less refined the better. This
      is especially true for a minority of people that do not do well on grains.
      Simply put, this means things that your great-grandmother would recognize
      as food.
      <span className="healthyStarchyCarbs">
        Potatoes/Fruit/Bread/Rice/Pasta
      </span>
      > <span className="lessHealthyStarchyCarbs">Cereal</span> >{' '}
      <span className="leastHealthyStarchyCarbs">Sugary Cereal</span>.
    </p>
    <ul>
      <li>Raw Potatoes 100g = ~15g carbs. (Sometimes closer to 20g)</li>
      <li>
        Dried Rice 100g = ~70g of carbs. Or 140g= ~100g. (Works for most dried
        pasta too.)
      </li>
      <li className="starchyCarbsNote">
        note: One of the easiest things to do is to fill a rice cooker with the
        remainder of the carb requirements for your day once you have subtracted
        the fruit number. This means you only have to weigh the pre-cooked once
        at the start of the day, and the cooked rice can easily be divided into
        1/2, 1/3 etc by sight in the cooker so that we don't need to weigh it
        again. If you are eating two pieces of fruit a day this leaves you with
        a carb number of 145g which is ~210g of rice.
      </li>
    </ul>

    <div className="row">
      <div className="col s12">
        <h2 className="macroHeaders">Protein</h2>
        <ul>
          <li>
            -Protein Training Day is low-fat (Leaner cuts of meat).
            <ul>
              <li>
                Chicken breast (skinless) Extremely lean red meat >95% fat-free
              </li>
              <li>Low-fat fish - Generally white fish.</li>
              <li>Crab</li>
              <li>Egg whites - (Adding one yolk for flavour is fine.)</li>
              <li>
                <strong>
                  Uncooked beef/ chicken/ pork/ lamb/ fish 100g = ~20g of
                  protein.
                </strong>
              </li>
              <li>One large egg = ~8g protein 5g fat. Egg whites = ~4g</li>
            </ul>
          </li>
          <li>-Rest day is higher fat (Fattier fish, meat etc.).</li>
        </ul>
      </div>
    </div>
  </div>
);

export default LandingPage;
