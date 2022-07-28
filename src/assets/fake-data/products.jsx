// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/product_088.jpg";
import product_06_image_02 from "../images/product_087.jpg";
import product_06_image_03 from "../images/product_086.jpg";

import product_07_image_01 from "../images/product_99.jpg";
import product_07_image_02 from "../images/product_09.jpg";
import product_07_image_03 from "../images/product_09.jpg";

const products = [
  {
    id: "01",
    title: "Pineapple",
    price: "49.99",
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Fruits",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "02",
    title: "Carrots",
    price: "9.99",
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Vegetables",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "03",
    title: "Mountain Dew",
    price: "29.99",
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Beverage",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "04",
    title: "Bananas",
    price: "29.99",
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Fruits",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "05",
    title: "Apples",
    price: "24.99",
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Fruits",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "06",
    title: "Lemon",
    price: "39.99",
    image01: product_07_image_01,
    image02: product_07_image_02,
    image03: product_07_image_03,
    category: "Fruits",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "07",
    title: "Mango",
    price: "5.99",
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Fruits",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "08",
    title: "Apio",
    price: "20.99",
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Vegetables",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "09",
    title: "Avocado",
    price: "66.99",
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Vegetables",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "10",
    title: "Coca Cola",
    price: "87.99",
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Beverage",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "11",
    title: "Onion",
    price: "499.99",
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Vegetables",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "12",
    title: "Lettuce",
    price: "10.99",
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Vegetables",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "13",
    title: "Water ",
    price: "43.99",
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Beverage",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
];

export default products;















