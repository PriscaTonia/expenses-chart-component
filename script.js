/*  let data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
]; */

// Getting JSON Files
fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    if (jsondata) {
      updateChartData(jsondata);
    }
  });

let updateChartData = (data) => {
  let chartContainer = document.querySelectorAll(".chart-box div");

  chartContainer.forEach((chart) => {
    let parent_Element = chart.parentElement;
    let chartPrice = parent_Element.firstElementChild;
    for (let i = 0; i < data.length; i++) {
      if (data[i].day === chart.parentElement.id) {
        chartPrice.innerText += `$${data[i].amount}`;
      }
    }
    chart.addEventListener("mouseover", (e) => {
      chartPrice.style.display = "flex";
    });

    chart.addEventListener("mouseout", (e) => {
      parent_Element.firstElementChild.style.display = "none";
    });
  });
};
