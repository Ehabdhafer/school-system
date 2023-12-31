document.getElementById("form1").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  let gender = document.getElementById("gender").value;
  let phone = document.getElementById("phone").value;
  let grade = document.getElementById("grade").value;

  let tr1 = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");

  td1.textContent = name;
  td2.textContent = date;
  td3.textContent = gender;
  td4.textContent = phone;
  td5.textContent = grade;

  //   table.appendChild(tr1);
  tr1.appendChild(td1);
  tr1.appendChild(td2);
  tr1.appendChild(td3);
  tr1.appendChild(td4);
  tr1.appendChild(td5);

  document.getElementById("table1").appendChild(tr1);
});

// --------------------------------------------

let students = [];
document.getElementById("form1").addEventListener("submit", function (event) {
  event.preventDefault();
  let fullname = document.getElementById("name").value;
  let birthdate = document.getElementById("date").value;
  let gender2 = document.getElementById("gender").value;
  let phone2 = document.getElementById("phone").value;
  let major = document.getElementById("major").value;

  class Student {
    constructor(array) {
      this.array = array;
    }

    // render() {
    //   this.imageurl;
    //   this.fullname;
    //   this.birthdate;
    //   this.gender2;
    //   this.major;
    //   this.phone2;
    // }
  }

  let stdiv = document.createElement("div");
  stdiv.classList.add("student-card");
  let img = document.createElement("img");
  img.classList.add("img2");
  let fn = document.createElement("span");
  let bd = document.createElement("span");
  let ge = document.createElement("span");
  let ph = document.createElement("span");
  let mj = document.createElement("span");

  let src = "img/male.jpg";
  img.src = src;
  fn.textContent = `Name : ${fullname}`;
  bd.textContent = `Birth Date : ${birthdate}`;
  ge.textContent = `Gender :  ${gender2}`;
  ph.textContent = `Phone number : ${phone2}`;
  mj.textContent = `Major: ${major}`;

  stdiv.appendChild(img);
  stdiv.appendChild(fn);
  stdiv.appendChild(bd);
  stdiv.appendChild(ge);
  stdiv.appendChild(ph);
  stdiv.appendChild(mj);

  let student1 = new Student([fullname, birthdate, gender2, phone2, major]);
  document.getElementById("div2").appendChild(stdiv);
  students.push(student1);
  console.log(students);
  localStorage.setItem("students", JSON.stringify(students));
});

window.addEventListener("load", function () {
  const localStorageContent = localStorage.getItem("students");
  students = localStorageContent ? JSON.parse(localStorageContent) : [];

  for (const student of students) {
    const named = student.array[0];
    const birthDated = student.array[1];
    const genderd = student.array[2];
    const phone2d = student.array[3];
    const majord = student.array[4];

    document.getElementById(
      "div2"
    ).innerHTML += `<div class="student-card"><img class="img2" src="img/male.jpg"><span>Name : ${named}
    </span><span>Birth Date : ${birthDated}</span><span>Gender : ${genderd} </span><span>Phone number : ${phone2d}
    </span><span>Major: ${majord}</span></div>`;
  }
});
// localStorage.clear();
