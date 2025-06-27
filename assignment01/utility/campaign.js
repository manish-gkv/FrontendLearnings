function createCampaignBody(data) {
    
    return data.map(item => `

        <div class="campaign-item font-semibold flex items-between  py-4">
            <div class="flex grow">
                <div >
                    <img src="/img/chat-square-text - ${item.color}.svg"
                        class=" rounded-md bg-${item.color}-50 p-2 mr-4 p-5"
                    />
                </div>
                <div>
                    <h3 class="hover:text-green-400">${item.title}</h3>
                    <p class="text-gray-400">${item.description}</p>
                </div>
            </div>
            <div class="flex md:gap-20 items-center justify-center">
                <div class="">
                    <div class="tracking-wide">Progress</div>
                    <div class="w-full bg-${item.color}-200  h-1 overflow-hidden">
                        <div class="bg-${item.color}-600 h-full " style="width: ${item.progress}%;"></div>
                    </div>
                </div>
                <div class="text-gray-400 ">${item.progress}</div>
                <div class="flex items-center justify-center py-2 px-1 rounded-md bg-gray-100 cursor-pointer hover:bg-green-400">
                    <img src="/img/arrow-right.svg" />
                </div>
            </div>
        </div>
    `).join('');
}

export default function campaign(selected) {
    const choices = {
            "day": [
                {
                    "title": "Top Authors",
                    "description": "HTML/CSS/JS,Python",
                    "color": "blue",
                    "progress": 90
                },
                {
                    "title": "Top Authors",
                    "description": "HTML/CSS/JS,Python",
                    "color": "green",
                    "progress": 60
                },
                {
                    "title": "Top Authors",
                    "description": "HTML/CSS/JS,Python",
                    "color": "red",
                    "progress": 50
                },
                {
                    "title": "Top Authors",
                    "description": "HTML/CSS/JS,Python",
                    "color": "yellow",
                    "progress": 30
                },
            ],
            "week": [
                {
                    "title": "New Users",
                    "description": "HTML/CSS/JS,Python",
                    "color": "yellow",
                    "progress": 20
                },
                {
                    "title": "Weekly Bestsellers",
                    "description": "HTML/CSS/JS,Python",
                    "color": "red",
                    "progress": 70
                },
                {
                    "title": "Popular Authors",
                    "description": "HTML/CSS/JS,Python",
                    "color": "green",
                    "progress": 80
                },
                {
                    "title": "Top Authors",
                    "description": "HTML/CSS/JS,Python",
                    "color": "blue",
                    "progress": 50
                },
            ],
            "month": [
                {
                    "title": "Monthly Bestsellers",
                    "description": "HTML/CSS/JS,Python",
                    "color": "green",
                    "progress": 30
                },
                {
                    "title": "Top Authors",
                    "description": "HTML/CSS/JS,Python",
                    "color": "red",
                    "progress": 80
                },
                {
                    "title": "New Users",
                    "description": "HTML/CSS/JS,Python",
                    "color": "yellow",
                    "progress": 20
                },
                {
                    "title": "Popular Authors",
                    "description": "HTML/CSS/JS,Python",
                    "color": "blue",
                    "progress": 40
                },
            ]
        }
    
    document.getElementById("campaign-content").innerHTML = '';
    document.getElementById("campaign-content").innerHTML = createCampaignBody(choices[selected]);

}