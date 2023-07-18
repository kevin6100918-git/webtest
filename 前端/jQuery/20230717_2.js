$(function(){
    let th = 
    `<tr>
        <th>場次</th>
        <th>時間</th>
        <th>主題</th>
    </tr>`;
    $("#courseTable").append(th);
    let thcount = topics.length;
    for (let x=0; x<thcount; x++){
        let thisRow = 
            `<tr>
                <td>${x+1}</td>
                <td>${dates[x]}</td>
                <td id="topic">${topics[x]}</td>
            </tr>`;
        $("#courseTable").append(thisRow);
    }
});