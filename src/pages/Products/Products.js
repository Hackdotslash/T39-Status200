import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';
import Admin from "../../Admin/Admin";
import Student from "../../Student/Student";

import UserProfile from '../../Status';

function Products() {


  var email = UserProfile.getEmail();
  var result = <></>
  if (email === "")
    result = <><InfoSection {...homeObjOne} /><InfoSection {...homeObjTwo} /></>
  else if (email === "cse190001016@iiti.ac.in")
    result = <Admin />
  else
    result = <Student />


  return (

    <>
      {result}
    </>
  );
}

export default Products;
