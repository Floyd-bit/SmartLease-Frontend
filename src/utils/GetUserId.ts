/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-19 17:09:38
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-19 17:10:04
 */
function GetUserId()
{
  var name = "userId=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++)
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

export default GetUserId;
