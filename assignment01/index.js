import campaign from './utility/campaign.js';
import milestone from './utility/milestoneCharts.js';
import drawSalesSharesChart from './utility/salesShares.js';


document.addEventListener("DOMContentLoaded", function () {
    
    campaign("day");
    const campaign_tabs = document.querySelectorAll(".campaign-tabs");
    campaign_tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            campaign_tabs.forEach(t => t.classList.remove("bg-gray-200"));
            tab.classList.add("bg-gray-200");
            campaign(tab.innerHTML.trim().toLowerCase());
        });
    });

    milestone("1");
    const milestone_tabs = document.querySelectorAll(".milestone_options");
    milestone_tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            milestone_tabs.forEach(t => t.classList.remove("bg-gray-100"));
            tab.classList.add("bg-gray-100");

            milestone(String(tab.id));
            console.log("tabID=" , tab.id);
        });
    });

    drawSalesSharesChart();
});