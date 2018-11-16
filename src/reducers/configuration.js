import { ADD_ITEM, REMOVE_ITEM } from '../actions';

import bourbonSoap from '../assets/images/products/bourbon-soap.webp';
import leafSoap from '../assets/images/products/leaf-soap.webp';
import pineSoap from '../assets/images/products/pine-soap.webp';
import victorySoap from '../assets/images/products/victory-soap.webp';
import airCologne from '../assets/images/products/air-cologne.webp';
import bourbonCologne from '../assets/images/products/bourbon-cologne.webp';
import landCologne from '../assets/images/products/land-cologne.webp';
import seaCologne from '../assets/images/products/sea-cologne.webp';
import afterShave from '../assets/images/products/after-shave.webp';
import anchorPomade from '../assets/images/products/anchor-pomade.webp';
import beardBalm from '../assets/images/products/beard-balm.webp';
import faceWash from '../assets/images/products/face-wash.webp';
import faceLotion from '../assets/images/products/face-lotion.webp';
import handBalm from '../assets/images/products/hand-balm.webp';
import hotShave from '../assets/images/products/hot-shave.webp';
import tacticalPouch from '../assets/images/products/tactical-pouch.webp';
import survivalHatchet from '../assets/images/products/survival-hatchet.webp';

const INITIAL_STATE = {
  data: [],
  items: [
    {
      img: bourbonSoap,
      title: 'Big American Bourbon Soap',
      price: 9.5,
      description: `In the early days of the American Frontier, rugged pioneers indulged with a dry buffalo steak and a pull of whiskey, not $12 appletini and plate of bruschetta. Duke Cannon honors that independent, pioneering spirit by partnering with Buffalo Trace Distillery to add their award-winning Kentucky Straight Bourbon Whiskey to this Big American Bourbon Soap. Weighing in at a full 10 oz., this large, American-made soap has a rich, oak barrel scent that smells as good as bourbon tastes.`,
      quantity: 0
    },
    {
      img: leafSoap,
      title: 'Big Ass Brick Of Soap - Leaf and Leather',
      price: 9,
      description: `Duke Cannon would rather explore the Great Plains on horseback than navigate the parking lot of an outlet mall in a compact car. It's in the Great Wide Open, about 1000 miles from the nearest food court, where a light breeze carries the scent of old leather mixed with fresh rolled tobacco leaves. Take a trip back in time when a nice, masculine scent didn't involve citrus fruits or flowers, and experience this American-made soap inspired by leaf and leather.`,
      quantity: 0
    },
    {
      img: pineSoap,
      title: 'Big Ass Brick Of Soap - Fresh Cut Pine',
      price: 9,
      description: `Duke Cannon does not require the rich aroma of a $7 cappuccino to get him going in the morning, and he doesn't need comfy fashion boots to stay "cozy." Instead, Duke Cannon finds inspiration and warmth in hard work, like a morning spent chopping wood in the solitude of a pine forest. Experience the invigorating scent of fresh split pine and celebrate a return to basics with this American made soap inspired by the lush green wilderness of the Pacific Northwest.`,
      quantity: 0
    },
    {
      img: victorySoap,
      title: 'Limited Edition WWII-Era Big Ass Brick Of Soap - Victory',
      price: 9,
      description: `The Big Ass Brick of Soap from Duke Cannon is designed to meet the high standards of hard working men who want to get clean and smell good without using shower gels and accessories. True to its name, our soap is big (10 oz.) and will last much longer than the dainty little bars in your local grocery. It also smells awesome (clean, fresh scent with a hint of grass) and contains steel cut grains for maximum gripability. If you enjoy activities like drinking American beer or using power tools, then frankly, this is the only soap meant for you.`,
      quantity: 0
    },
    {
      img: airCologne,
      title: 'Solid Cologne - Air',
      price: 25,
      description: `The open skies scent is very subtle and certainly a crowd pleaser. The fragrance is crisp and light and smells like fresh mountain air after the rain, not like your grandma's living room.`,
      quantity: 0
    },
    {
      img: bourbonCologne,
      title: 'Solid Cologne - Bourbon',
      price: 25,
      description: `The Bourbon Solid Cologne offers a woodsy, oak barrel scent inspired by the rackhouses at our favorite place in the world, the Buffalo Trace Distillery. If you've had the distinct pleasure of smelling our Big American Bourbon Soap, then you'll probably want this.`,
      quantity: 0
    },
    {
      img: landCologne,
      title: 'Solid Cologne - Land',
      price: 25,
      description: `The Redwood scent is masculine and warm containing hints of sandalwood, amber, citrus, rosemary, and clove. Smells like a walk through the Great Northwest, not a high school dance.`,
      quantity: 0
    },
    {
      img: seaCologne,
      title: 'Solid Cologne - Sea',
      price: 25,
      description: `The Naval Supremacy scent is a light, fresh water fragrance that with subtle notes of citrus. If you love the scent of our Naval Supremacy soap, then stop reading and add this to your cart.`,
      quantity: 0
    },
    {
      img: hotShave,
      title: 'Hot Shave Clear Warming Shave Gel',
      price: 15,
      description: `Master barbers know that the perfect shave starts with a little heat. Duke Cannon’s Hot Shave is a clear shaving gel with a unique warming sensation that helps deliver the closest possible shave. Simply apply a small amount with warm water and wait 20-30 seconds before shaving to activate the heat. This opens the pores, softens and lubricates the skin for precise, comfortable blade strokes. Upon completion, cool down with a splash of cold water and apply After-Shave balm to close the pores and hydrate skin.`,
      quantity: 0
    },
    {
      img: afterShave,
      title: 'Cooling After-Shave Balm',
      price: 15,
      description: `Any time a man wipes sharpened steel across his face, there is bound to be some damage. Find relief from that scorched earth feeling by going from hot to cold with Duke Cannon's After-Shave Balm. Made with menthol, it provides an extremely unique cooling effect that helps close the pores and provide instant comfort. Superior grade ingredients like aloe, shea butter, and allantoin provide hydration while minimizing razor burn irritation, and a light sandalwood fragrance leaves you feeling and smelling your handsome best. Free of alcohol, parabens, sulfates, and anything you don't want.`,
      quantity: 0
    },
    {
      img: anchorPomade,
      title: 'News Anchor Pomade',
      price: 15,
      description: `Your dad never talked to you about hair styling, but be damn sure he used a decent pomade. After all, a man’s hair is a weapon and no hair commands more respect than that of a News Anchor. Duke Cannon’s News Anchor Pomade works on all hair types, delivering a natural matte finish to provide a classic, camera-ready look. Offers a medium-to-strong hold and a protein blend that strengthens and repairs your hard-working crown. Features the light scent of classic sandalwood with a hint of citrus. Prepare your hair for award-winning, 'round the clock coverage with Duke Cannon’s News Anchor Pomade.`,
      quantity: 0
    },
    {
      img: beardBalm,
      title: 'Best Damn Beard Balm',
      price: 15,
      description: `While a well manicured beard is a symbol of power and prestige, an unruly and disheveled beard has the potential to lead society into complete anarchy. Do your duty and maintain your beard with Duke Cannon's Best Damn Beard Balm. Made with superior grade ingredients like lanolin and cocoa butter, our Beard Balm helps moisturize and protect a man's beard and the face underneath it. With a pleasant, woodsy fragrance, and packaged in a premium travel tin, it's like a portable Redwood forest in your pocket.`,
      quantity: 0
    },
    {
      img: handBalm,
      title: 'Bloody Knuckles Hand Repair Balm',
      price: 15,
      description: `Dry, cracked hands are like living testaments to a man's hard work and ingenuity. And while hard working hands are to be celebrated, let's be honest; dry, cracked hands feel awful. That's why Duke Cannon introduced Bloody Knuckles Hand Repair Balm. Made with lanolin, it provides much-needed moisture without leaving the hands feeling sticky or greasy (like that stuff in the green jar.)`,
      quantity: 0
    },
    {
      img: faceWash,
      title: `Working Man's Face Wash`,
      price: 14,
      description: `While you're hard at work, dirt and grime flock to your face like hipsters to a vegan coffee shop with free wi-fi. That's why Duke Cannon created a face wash that works as hard as you do. Formulated to ward off the effects of double shifts, blistering winds, and bacon grease, it has a refreshing citrus scent and a little grit for optimal cleansing.`,
      quantity: 0
    },
    {
      img: faceLotion,
      title: 'Standard Issue Face Lotion',
      price: 15,
      description: `Every day, dirt, grease, and the elements wage a silent war on your mug, making it hard for you to put your best face forward. Hard-working folks don't have time to obsess over a fancy skin care regimen; you need a simple and straightforward defense. Standard Issue Face Lotion from Duke Cannon is formulated to provide instant, long lasting hydration while reducing excess oil and shine. It goes on smooth and lightweight without leaving a greasy residue. Fragrance free so your face doesn't smell like strawberries.`,
      quantity: 0
    },
    {
      img: tacticalPouch,
      title: 'Tactical Soap On A Rope Pouch',
      price: 15,
      description: `This U.S. military-grade tactical soap pouch should be standard-issue for every shower. To maximize hygiene in tactical situations, this equipment is engineered with a coarse mesh to scrub your hands and feet, and a softer mesh for less rough areas. The 550-mil-spec paracord keeps your large soap off the ground. Perfect for home, outdoor, field, or prison showers.`,
      quantity: 0
    },
    {
      img: survivalHatchet,
      title: 'The Duke Cannon Survivalist Hatchet',
      price: 135,
      description: `Whether hunting, camping, chomping wood, or killing zombies, the Duke Cannon Survivalist Hatchet has you covered. A collaboration with our friends at Hardcore Hammers, this hatchet is 100% hand-crafted in USA. The perfect gift for the outdoorsman or Rick Grimes of the family.`,
      quantity: 0
    }
  ],
  cart: []
};

export const configuration = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      action.item.quantity = action.item.quantity + 1;
      const add = state.cart.filter(item => item.title !== action.item.title);

      return {
        ...state,
        cart: [...add, action.item]
      };
    case REMOVE_ITEM:
      action.item.quantity = action.item.quantity - 1;
      const remove = state.cart.filter(
        item => item.title !== action.item.title
      );

      return {
        ...state,
        cart: [...remove, action.item].filter(item => item.quantity > 0)
      };
    default:
      return state;
  }
};
