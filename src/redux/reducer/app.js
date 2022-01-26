import { TOGGLE_TEXT } from "../action/action-types";

const initialstate = {
 visibility : true,
}


export default(state = initialstate , action) =>{
 switch (action.type) {
  case TOGGLE_TEXT:
   return{
    ...state,
    visibility: !state.visibility,
   }
 }
}
