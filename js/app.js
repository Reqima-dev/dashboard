
/*-------- MENu---------------- */

const subBtn = document.querySelector(".sub_btn");
const subMenu = document.querySelector(".sub_Menu");

subBtn.addEventListener("click", () => {
  subMenu.classList.toggle("view");
});

/*--------- LOAD PROGRESS CIRCULAR BAR -------*/
const card = document.querySelectorAll(".card");
window.addEventListener("load", function () {
  card.forEach((item) => {
    let numElement = item.querySelector(".num");
    let num = parseInt(numElement.innerText);
    let count = 0;
    let time = 2000 / num;
    let circle = item.querySelector(".circle");
    setInterval(() => {
      if (count == num) {
        clearInterval();
      } else {
        count += 1;
        numElement.innerText = count;
      }
    }, time);
    
    circle.style.strokeDashoffset = 403 - 403 * (num / 100);
    
    let dot = item.querySelector(".dots");
    dot.style.transform = `rotate(${460 * (num / 100)}deg)`;
    if (num == 100) {
      dot.style.opacity = 0;
    }
  });
});

const chart = document.querySelector("#chart").getContext("2d");

/// Create a new chart instance

new Chart(chart, {
  type: "line",
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
    
    datasets: [
      {
        label: "Balance",
        data: [50, 80, 500, 60, 40, 250, 280, 400],
        borderColor: "#dadada",
        borderWidth: 2,
        fill: true,
        tension: 0.1,
        
      },
      {
        label: "Members",
        data: [20, 150, 45, 350, 425, 400, 275, 100],
        borderColor: "green",
        borderWidth: 2,
        fill: true,
        tension: 0.1,
        
      },
    ],
  },
  options: {
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    scales: {
      y: {
        ticks: {
          color: "#fff"
        },
        suggestedMax: 500,
        
        
      },
      x: {
        ticks: {
          color: "#fff"
        },
        
      }
    },
    responsive: true,
  },
});


/*----- CLOSE DASHBOARD BTN ------------*/
const openDAH = document.querySelector('.open-dashBtn');
const closeDAH = document.querySelector('.close-dashBtn');
const chartDash = document.querySelector('.dashChart');


closeDAH.addEventListener('click', () => {
  chartDash.style.display = 'none'
})

openDAH.addEventListener('click', () => {
  chartDash.style.display = 'block'
})




/*------ PIE CHART -----*/
const pieChart = document.querySelector("#pieCharts").getContext("2d");

new Chart(pieChart, {
  type: 'doughnut',
  data: {
    labels : [
      'Members 43%',
      'Sales 36%',
      'LOSS 21%'
    ],
    datasets:[{
      data:[43, 36, 21],
      backgroundColor : [
        'rgb(54, 162, 235)',
        '#7fffd4',
        '#ff00ff',        
      ],
      hoverOffset : 20
    }]
  }
})


/*----- CLOSE PIE DASHBOARD BTN ------------*/
const closePie = document.querySelector('.close-pieBtn');
const chartPie = document.querySelector('.dashPie');


closePie.addEventListener('click', () => {
  chartPie.style.display = 'none'
})




