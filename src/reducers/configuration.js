import { ADD_ITEM, REMOVE_ITEM } from '../actions';

import d20Pin from '../assets/images/products/d20-pins.png';
import cutthroatCuties from '../assets/images/products/cutthroatcuties.png';
import ghibliSnacks from '../assets/images/products/ghiblisnacks.png';
import pokemonPuff from '../assets/images/products/pokemonpuff.png';
import northernPin from '../assets/images/products/northernpin.png';
import charteredGame from '../assets/images/products/charteredgame.jpg';
import huntMaster from '../assets/images/products/huntmaster.jpg';
import hootGame from '../assets/images/products/hootgame.png';
import arcaneAlley from '../assets/images/products/arcanealley.png';
import filibusterGame from '../assets/images/products/filibuster.png';
import makerPhone from '../assets/images/products/makerphone.jpg';
import gameduino from '../assets/images/products/gameduino.jpeg';
import audxSpeakers from '../assets/images/products/audx.webp';
import codrone from '../assets/images/products/codrone.jpg';
import qdeeRobot from '../assets/images/products/qdeerobot.jpg';
import duskriderComic from '../assets/images/products/duskrider.jpg';
import overlordComic from '../assets/images/products/overlord.jpg';
import draculagateComic from '../assets/images/products/draculagate.jpg';
import arthurFrostComic from '../assets/images/products/arthurblackfrost.png';
import spookyGirlsComic from '../assets/images/products/spookygirls.jpg';
import heroImage from '../assets/images/products/gameduinohero.jpeg';

const INITIAL_STATE = {
  data: {
      heroImage: heroImage,
      productName: 'Gameduino',
      hot: `Hot Items`,
      new: `New Arrivals`,
  },
  items: [
    {
      img: d20Pin,
      title: 'D-20 Enamel Pin',
      price: 12,
      description: `D20 Hard Enamel Pins inspired by classes from Dungeons & Dragons, and other tabletop RPGs.`,
      quantity: 0,
      category: `Pins`,
    },
    {
      img: cutthroatCuties,
      title: 'Cutthroat Cuties',
      price: 12,
      description: `Sailor Senshi enamel pins with the stylings of Americana traditional tattoos`,
      quantity: 0,
      category: `Pins`,
      special: `hot`,
    },
    {
      img: ghibliSnacks,
      title: 'Ghibli Snacks',
      price: 13,
      description: `Hard enamel pins of your favorite Ghibli movie characters eating snacks.`,
      quantity: 0,
      category: `Pins`,
    },
    {
      img: pokemonPuff,
      title: 'Pokemon PokePuff',
      price: 13,
      description: `Hard enamel pins of your favorite Pokemon reimagined as creampuffs`,
      quantity: 0,
      category: `Pins`,
    },
    {
      img: northernPin,
      title: 'Northern Spell',
      price: 13,
      description: `Northern Spell's Sleepy and Adorable Pin Collection`,
      quantity: 0,
      category: `Pins`,
    },
    {
      img: charteredGame,
      title: 'Chartered Game',
      price: 40,
      description: `Chartered: The Golden Age - Build and buy your way to becoming Amsterdam's wealthiest merchant in this easy to learn boardgame.`,
      quantity: 0,
      category: `board-games`,
    },
    {
      img: huntMaster,
      title: 'Hunt Master',
      price: 20,
      description: `Players travel to creepy locations and hunt for creatures of the night to assist them in defeating their opponents. Their goal is to locate five monsters of a specific monster-type (Cryptid, Undead, Paranormal or Humanoid) before their opponents assemble their legion of monsters.`,
      quantity: 0,
      category: `board-games`,
    },
    {
      img: arcaneAlley,
      title: 'Arcane Alley',
      price: 20,
      description: `Each player is a wizard merchant, peddling enchanted curiosities to the most curious enchanters. Outsell, outsmart, and outlast the other players with help from the magical items in your storehouse, but don’t get caught by the inspectors.`,
      quantity: 0,
      category: `board-games`,
    },
    {
      img: hootGame,
      title: 'Hoot',
      price: 25,
      description: `Hoot is a brand new party game that brings out your witty side. The rules are pretty easy: create phrases from random strings of letters.`,
      quantity: 0,
      category: `board-games`,
      special: `new`,
    },
    {
      img: filibusterGame,
      title: 'Filibuster!',
      price: 25,
      description: `A fast paced, semi-cooperative political party game for 3-5 players.`,
      quantity: 0,
      category: `board-games`
    },
    {
      img: makerPhone,
      title: 'Maker Phone',
      price: 100,
      description: `MAKERphone is an educational DIY mobile phone designed to bring electronics and programming to the crowd in a fun and interesting way.`,
      quantity: 0,
      category: `diy-tech`
    },
    {
      img: gameduino,
      title: 'Gameduino: an Arduino game adapter',
      price: 15,
      description: `Gameduino connects your Arduino to a VGA monitor and speakers, so anyone who can write an Arduino sketch can create video games. It's packed full of 8-bit game goodness: hundreds of sprites, smooth scrolling, multi-channel stereo sound.`,
      quantity: 0,
      category: `diy-tech`
    },
    {
      img: audxSpeakers,
      title: 'Audx DIY Speakers',
      price: 15,
      description: `Build your speaker and create your own music visualiser whilst learning about coding.`,
      quantity: 0,
      category: `diy-tech`
    },
    {
      img: codrone,
      title: `CoDrone`,
      price: 50,
      description: `A drone you can easily program to do whatever you want: follow you, engage in laser battles, go through a maze and more.`,
      quantity: 0,
      category: `diy-tech`,
      special: `hot`,
    },
    {
      img: qdeeRobot,
      title: 'Qdee Robot',
      price: 100,
      description: `Qdee is a Robot Kit designed to teach kids everything about the robot. With Qdee, Kids can utilize micro:bit to fully realize their ideas and truly unlock their imagination.`,
      quantity: 0,
      category: `diy-tech`,
      
    },
    {
      img: duskriderComic,
      title: 'Duskrider',
      price: 15,
      description: `A new social phenomenon is revolutionizing human life on Zarmina. People now have the opportunity to transfer their consciousness to a new body: a synthetic host. The synthetic host doesn’t age. It doesn’t need food, get sick or develop cancer. Transferring essentially means immortality. The process, however, is irreversible.`,
      quantity: 0,
      category: `graphic-novel`
    },
    {
      img: overlordComic,
      title: 'Overlord',
      price: 15,
      description: `The story follows the adventure of Kit Thornwood, the town's cynical secret magic user as, in the space of one day, he punches the mayor in the face, messes up confessing his feelings for his best friend and number one town hero Ivor Adaliad, and runs away to accidentally become the master of a horde of evil minions and an ominously dark tower.`,
      quantity: 0,
      category: `graphic-novel`
    },
    {
      img: draculagateComic,
      title: 'Draculagate',
      price: 20,
      description: `When Dracula's nephew kills a Canadian TV star, it sparks an international incident that may lead to war between Canada and the isolationist land of monsters. The United States attempts to broker peace, but the State Department is greatly lacking in staff and expertise. They're the first Americans in decades to cross into monster civilization, and they are going to do very, very poorly.`,
      quantity: 0,
      category: `graphic-novel`,
      special: `new`,
    },
    {
      img: arthurFrostComic,
      title: 'Arthur Frost',
      price: 20,
      description: `After his father abandons his family, a young fisherman named Arthur inherits a curse that has plagued his bloodline for generations.`,
      quantity: 0,
      category: `graphic-novel`
    },
    {
      img: spookyGirlsComic,
      title: 'Spooky Girls',
      price: 20,
      description: `A full-color graphic novel made up of 4 new monster comics: Jenny the Werecat, Vicky Slime, Punk Teen Demon Queen, & Tarantula Twins.`,
      quantity: 0,
      category: `graphic-novel`
    },    
  ],
  cart: [],
  itemCount: 0,

};

export const configuration = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      action.item.quantity = action.item.quantity + 1;

      const add =
        state.cart.indexOf(action.item) !== -1
          ? state.cart.map(item =>
              item.title === action.item.title ? (item = action.item) : item
            )
          : [...state.cart, action.item];

      const addCount = add.map(item => item.quantity).reduce((a,v) => a + v);


      return {
        ...state,
        itemCount: addCount,
        cart: [...add]
      };

    case REMOVE_ITEM:
      action.item.quantity = action.item.quantity - 1;

      const remove = state.cart
        .map(item =>
          item.title === action.item.title ? (item = action.item) : item
        )
        .filter(item => item.quantity > 0);

        const removeCount = remove.length > 0 ? remove.map(item => item.quantity).reduce((a, v) => a + v) : 0;

      return {
        ...state,
        itemCount: removeCount,
        cart: [...remove]
      };
    default:
      return state;
  }
};