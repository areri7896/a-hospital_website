const fetchData = () => {
    const formEl = document.getElementById(".appointment-form");
    const elements = document.querySelector("#appointment-form > div");
    fetch('./data.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        formEl.setAttribute("action", data.form.action);
        formEl.setAttribute("method", data.form.method);
        data.form.elements.forEach((element) => {
          const el = document.createElement(element.tag);
          for (const [key, value] of Object.entries(element)) {
            if (key !== "tag" && key !== "text") {
              el.setAttribute(key, value);
            } else if (key === "text") {
              el.innerText = value;
            }
          }
          elements.appendChild(el);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  fetchData();
  