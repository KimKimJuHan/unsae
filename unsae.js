function getFortune() {
  var name = document.querySelector("#nameInput").value;
  var category = document.querySelector("#categorySelect").value;
  var list = document.querySelector("#resultList");

  if (name === "") {
    alert("이름을 입력해주세요.");
    return;
  }

  var score = Math.floor(Math.random() * 101);

  var item = document.createElement("div");
  item.className = "result-item";
  item.innerHTML = name + "님의 " + category + " : " + score + "점";

  list.insertBefore(item, list.firstChild);
}