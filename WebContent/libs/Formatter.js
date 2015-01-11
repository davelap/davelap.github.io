function fnDateTimeFormatter(oValue){  
  if (oValue == undefined || oValue == "") {  
  return;  
  }  
  return new Date(oValue);  
};  