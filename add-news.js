function submitNews() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  db.collection("news").add({
    title: title,
    content: content,
    date: new Date()
  }).then(() => {
    alert("Мэдээ амжилттай нэмэгдлээ!");
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
  }).catch(err => {
    console.error("Алдаа гарлаа: ", err);
  });
}
