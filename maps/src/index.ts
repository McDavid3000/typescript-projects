/// <reference types="@types/google.maps" />
// Convention to use curly brackets on imports
// and not to use 'default' keyword to export
import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);

customMap.addMarker(company);
