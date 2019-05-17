import { IProfileItem } from './IProfileItem';

export class ProfileItem implements IProfileItem {
    firstName;
    lastName;
    gender;
    role;
    avatarLink;
    showDetails;
    constructor(data) {
       this.firstName = data.firstName;
       this.lastName = data.lastName;
       this.gender = data.gender;
       this.role = data.role;
       this.avatarLink = this.gender === 'male' ? 'male-avatar.jpg' : 'female-avatar.jpg';
       this.showDetails = false;
    }
}
