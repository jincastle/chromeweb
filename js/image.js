function upload(event){
    const reader = new FileReader();

    reader.onload = function(event) {
        const img = document.createElement("img");
        img.setAttribute("src", event.target.result);

        document.querySelector("#canv").appendChild(img);
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  