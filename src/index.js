var name1,name2,animal1,animal2,color;
function element(id){
return document.getElementById(id);
}


element("submit").addEventListener("click", function() {
   name1 = element("nameword").value;
  name2 = element("nameword2").value;
  animal1 = element("animalword").value;
  animal2 = element("animalword2").value;
   color = element("colorword").value;
element("madlibtext").value =name1 + " was walking in the park one day humming to themself.\nThe day was bright, the sun was shining, and the "+ animal1 +"were singing.\nSuddenly, two "+ color + animal2+ " ran by.\n'Run!' they cried '" + name2 + " is coming and they are angry!'";
element("prompt").style.display="block";
element("inputs").style.display="none";
});
  element("resetB").addEventListener("click", function() {
  name1 ="";
  name2 = "";
  animal1= "";
  animal2= "";
  color="";
element("nameword").value="";
element("animalword").value="";
element("nameword2").value="";
element("animalword2").value="";
element("colorword").value="";
  element("madlibtext").value="";
  element("prompt").style.display="none";
element("inputs").style.display="block";
  });
