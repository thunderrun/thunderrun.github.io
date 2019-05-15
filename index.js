const images = [
  {
    locationText: "Jinji Lake, SIP, Suzhou",
    filename: "suzhou-jinji-lake"
  },
  {
    locationText: "Mount Jiuhua, Chizhou",
    filename: "chizhou-jiuhuashan"
  },
  {
    locationText: "Pingliangdajie, Jianye, Nanjing",
    filename: "nanjing-jianye-pingliangdajie"
  },
  {
    locationText: "Civic Center, Futian, Shenzhen",
    filename: "shenzhen-futian-citzen-center"
  },
  {
    locationText: "Nanjingyan Footbridge, Jianye, Nanjing",
    filename: "nanjingyan-footbridge"
  }
];

const total = images.length;
let index = Math.floor(Math.random() * total);

const changeImage = () => {
  const { locationText, filename } = images[index];

  document.body.style.backgroundImage = `url('/images/${filename}.jpg')`;
  document.querySelector(".location-text").innerText = locationText;
};

changeImage();

const next = () => {
  index += 1;
  if (index >= total) {
    index = 0;
  }
  changeImage();
};

const previous = () => {
  index -= 1;
  if (index <= -1) {
    index = total - 1;
  }
  changeImage();
};
