import { Company } from './Company';
import { CustomMap } from './GoogleMaps';
import { User } from './User';

const user = new User();
const company = new Company();
const map = new CustomMap('map_canvas');

map.addMarker(user);
map.addMarker(company);
