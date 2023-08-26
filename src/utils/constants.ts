import ue from '../images/UE-icon.png';
import soph from '../images/soph-icon.png';
import uc from '../images/uc-icon.png';
import rift from '../images/rift-icon.png';
import crav from '../images/crav-icon.png';
import lum from '../images/lum-icon.png';
import unf from '../images/unf-icon.png';
import vault from '../images/vault-icon.png';

type FactionItem = {
  name: string,
  icon?: any,
};

export const factionsArr: FactionItem[] = [
  {
    name: 'All',
  },
  {
    name: 'United Empire',
    icon: ue,
  },
  {
    name: 'Sophons',
    icon: soph,
  },
  {
    name: 'Umbral Choir',
    icon: uc,
  },
  {
    name: 'Riftborn',
    icon: rift,
  },
  {
    name: 'Cravers',
    icon: crav,
  },
  {
    name: 'Lumeris',
    icon: lum,
  },
  {
    name: 'Unfallen',
    icon: unf,
  },
  {
    name: 'Vaulters',
    icon: vault,
  },
];

export const sortArr: string[] = ['influence', 'price', 'alphabet'];

export const heroTypes: string[] = ['Guardian', 'Overseer'];
export const heroLvls: number[] = [1, 5, 18];
