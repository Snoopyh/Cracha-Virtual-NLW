const linksSocialMedia = {
  github: 'Snoopyh',
  youtube: 'channel/UCY2piUU9Qg6HWI19kYiRaCg',
  facebook: 'ismael.gustavo.9/',
  instagram: '_ismaelgustavo/',
  linkedin: 'in/ismael-gustavo-a9a57b20a/'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userGitHub.textContent = data.login
    })
}
getGitHubProfileInfos()
