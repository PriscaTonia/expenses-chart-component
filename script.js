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

//   Function to automate chart individual prices and heights
let updateChartData = (data) => {
  let chartContainer = document.querySelectorAll(".chart-box div");
  let maxHeight = 7;
  let calcHeight;

  chartContainer.forEach((chart) => {
    // Getting the Amounts to be displayed for each day form the Json data.**
    let parent_Element = chart.parentElement;
    let chartPrice = parent_Element.firstElementChild;
    // Looping through the json data to  get the amounts, check if the id and day are thesame and append the required amount.**
    for (let i = 0; i < data.length; i++) {
      if (data[i].day === chart.parentElement.id) {
        chartPrice.innerText += `$${data[i].amount}`; //Assigning each day's amount to be displayed 
        calcHeight = Math.round((data[i].amount * maxHeight) / 53); //this calculates the height to be given using the ammount of each days from the json data
        chart.style.height = `${calcHeight}em`; //Assigning each day's calculated height as the height of the div.
      }
    }
    // Adding a Mouse-over event listener to display chart price**
    chart.addEventListener("mouseover", (e) => {
      chartPrice.style.display = "flex";
    });
    // Adding a Mouse-out event listener to remove chart price**
    chart.addEventListener("mouseout", (e) => {
      parent_Element.firstElementChild.style.display = "none";
    });
  });
};

// To get the Current dDay
let ChartDays = document.querySelectorAll(".chart-box");
let getCurrentDay = (dayList) => {
  const weekday = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
  const d = new Date();
  let day = weekday[d.getDay()];
  console.log(d.getDay())

  dayList.forEach((currentDay) => {
    if (currentDay.id === day) {
      currentDay.classList.add("current-day");
    }
  });
};

getCurrentDay(ChartDays);
