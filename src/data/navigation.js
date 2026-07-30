import homeIcon from "../assets/images/icon-home.png"
import aboutIcon from"../assets/images/icon-about-me.png"
import techIcon from"../assets/images/icon-tech.png"
import projectIcon from"../assets/images/icon-project.png"
import contactIcon from"../assets/images/icon-contact.png"


const navigation = [
  {
    id: 1,
    label: "Home",
    href:"#home",
    icon: homeIcon,
  },
  {
    id: 2,
    label: "About",
    href:"#about",
    icon: aboutIcon,
  },
  {
    id: 3,
    label: "Skills",
    href:"#skills",
    icon: techIcon,
  },
  {
    id: 4,
    label: "Projects",
    href:"#projects",
    icon: projectIcon,
  },

  {
    id: 5,
    label: "Contact",
    href:"#contact",
    icon: contactIcon,
  },
];

export default navigation;