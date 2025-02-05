async function getData(urlName) {
  const url = urlName;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
	jsonInputHandler(json);
  } catch (error) {
    console.error(error.message);
  }
}

function jsonInputHandler(jsonInput)
{
	
	
	const centralContent = document.getElementById('centralContent');
	
	const linkModule = jsonInput.linkModule;
	const markdownModule = jsonInput.markdownModule;
	if(linkModule != null)
	{
		if(linkModule.length > 0)
		{
			const infoBoxContainerContainer = document.createElement("div");
			infoBoxContainerContainer.setAttribute('id', 'infoBoxHolder');
			for(let i = 0; i < linkModule.length; i++)
			{
				var infoBoxContainer = document.createElement("div");
				infoBoxContainer.setAttribute('class', 'infoBox'); 
				
				var thumbnailContainer = document.createElement("a");
				thumbnailContainer.setAttribute('class', 'thumbnailInfoBox');
				thumbnailContainer.setAttribute('href', linkModule[i].link);
				
				var thumbnailImg = document.createElement("img");
				thumbnailImg.setAttribute('src', linkModule[i].thumbnail);
				
				thumbnailContainer.appendChild(thumbnailImg);
				infoBoxContainer.appendChild(thumbnailContainer);
				
				var titleContainer = document.createElement("div");
				titleContainer.setAttribute('class', 'titleBoxInfoBox');
				
				var titleText = document.createElement("a");
				titleText.innerHTML = linkModule[i].name;
				
				if(linkModule[i].newTab)
				{
					titleText.setAttribute('onclick', 'window.open(\'' + linkModule[i].link + '\')');
				}
				else
				{
					titleText.setAttribute('href', linkModule[i].link);
				}
								
				titleContainer.appendChild(titleText);
				
				if(linkModule[i].download != "")
				{
					var downloadImg = document.createElement("img");
					downloadImg.setAttribute('class', 'downloadIcon');
					downloadImg.setAttribute('src', 'downloadIcon.png');
					downloadImg.setAttribute('onclick', 'window.open(\'' + linkModule[i].download + '\')');
					titleContainer.appendChild(downloadImg);
				
				}
				infoBoxContainer.appendChild(titleContainer);
				
				var descriptionText = document.createElement("p");
				descriptionText.setAttribute('class', 'descriptionInfoBox');
				descriptionText.innerHTML = linkModule[i].description;
				
				infoBoxContainer.appendChild(descriptionText);
				
				infoBoxContainerContainer.appendChild(infoBoxContainer);
				
				
			}
			centralContent.appendChild(infoBoxContainerContainer);
		}
	}
	
	if(markdownModule != null)
	{
		if(markdownModule.length > 0)
		{
			for(let i = 0; i < markdownModule.length; i++)
			{
				var mdContainer = document.createElement("div");
				mdContainer.setAttribute('class', 'markdownContainer');
				
				var mdBlock = document.createElement("md-block");
				mdBlock.setAttribute('src', markdownModule[i].source);
				
				mdContainer.appendChild(mdBlock);
				
				var downloadText = document.createElement("a");
				downloadText.setAttribute('class', 'downloadLink');
				downloadText.innerHTML = markdownModule[i].description;
				downloadText.setAttribute('href', markdownModule[i].download);
				
				
				var downloadImg = document.createElement("img");
				downloadImg.setAttribute('class', 'downloadIcon');
				downloadImg.setAttribute('src', 'downloadIcon.png');
				
				downloadText.appendChild(downloadImg);
				mdContainer.appendChild(downloadText);
				centralContent.appendChild(mdContainer);
				
				
			}
		}
	}
}
