import {User} from "./models/User"
import { UserShow } from "./views/UserShow";

const user = User.buildUser({name: 'Mohamad', age: 30});
const userShow = new UserShow('userShow', user);
userShow.render();