var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Threat Agent', 'Vlunerability Factors', 'Technical Impact', 'Business Impact'],
                datasets: [{
                    label: 'Score',
                    data: [],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMin:0,
                        suggestedMax:10
                    }
                }
            }
        });

        updateChart();
    function calc_score()
    {
      var LS = 0;
      var IS = 0;
      var dataset = [];
      var TA =  parseInt(document.getElementById('sl').value)+ 
       parseInt(document.getElementById('motive').value)+ 
        parseInt(document.getElementById('oppor').value) + 
        parseInt(document.getElementById('size').value);
        var VF =  parseInt(document.getElementById('eod').value) + 
        parseInt(document.getElementById('eoe').value) + 
        parseInt(document.getElementById('aware').value) + 
        parseInt(document.getElementById('intrude').value) + 0;
        LS = TA + VF;
        TA = (TA/4).toFixed(3);
        dataset.push(TA);
        VF = (VF/4).toFixed(3);
        dataset.push(VF);
      var LS = (LS/8).toFixed(3);
      
     var score_LS = 0;
     var s1 = document.getElementById('like_score');
     s1.innerHTML = LS;
     if(LS < 3)
     {
      s1.className = "";
      s1.classList.add('btn');
      s1.classList.add('btn-success');
      score_LS = 0;
     }
     else if(LS >= 3 && LS < 6 )
     {
      s1.className = "";
      s1.classList.add("btn");
      s1.classList.add('btn-warning');
      score_LS = 1;
     }
     else
     {
      s1.className = "";
      s1.classList.add('btn');
      s1.classList.add('btn-danger');
      score_LS = 2;
     }
     

      var TI =  parseInt(document.getElementById('loc').value)+ 
       parseInt(document.getElementById('loi').value)+ 
        parseInt(document.getElementById('loa').value) + 
        parseInt(document.getElementById('loacc').value);
        var BI =  parseInt(document.getElementById('finan').value) + 
        parseInt(document.getElementById('reput').value) + 
        parseInt(document.getElementById('comply').value) + 
        parseInt(document.getElementById('privacy').value) + 0;

        IS = TI + BI;
      var IS = (IS/8).toFixed(3);
      TI = (TI/4).toFixed(3);
      dataset.push(TI);
      BI = (BI/4).toFixed(3);
      dataset.push(BI);
      
      var s2 = document.getElementById('impact_score');
      s2.innerHTML = IS;
      var score_IS = 0;
      if(IS < 3)
     {
      s2.className = "";
      s2.classList.add('btn');
      s2.classList.add('btn-success');
      score_IS = 2;
    }
     else if(IS >= 3 && IS < 6 )
     {
      s2.className = "";
      s2.classList.add("btn");
      s2.classList.add('btn-warning');
      score_IS = 1;
     }
     else
     {
      s2.className = "";
      s2.classList.add('btn');
      s2.classList.add('btn-danger');
      score_IS = 0;
     }

     var matrix = [["Medium","High","Critical"],["Low","Medium","High"],["Note","Low","Medium"]]
     var o_score = document.getElementById('overall_score');
     var final_score = matrix[score_IS][score_LS]
     o_score.innerHTML = final_score;
     o_score.style.color = "black";
     if(final_score == "Note")
     {
      o_score.style.background = 'lightgreen';
     }
     else if(final_score == "Low")
     {
      o_score.style.background = "Yellow";
     }
     else if(final_score == "Medium")
     {
      o_score.style.background = "Orange"
     }
     else if(final_score == "High")
     {
      o_score.style.background = "Red"
     }
     else
     {
      o_score.style.background = "Pink";
     }
     updateChart(dataset);
     }
        
     function updateChart(dataset)
     {
      myChart.data.datasets[0].data = dataset
      myChart.update();
  }
