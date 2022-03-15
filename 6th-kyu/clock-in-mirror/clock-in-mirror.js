const WhatIsTheTime = (timeInMirror) => {
    let [formathours,formatmins] = timeInMirror.split(':')
    let mins = formatmins > 00 ? `${60-formatmins}`.padStart(2,'0') : `00`
    let hours = 
        formathours == 12 && mins == 00 ? `12` :
        formathours == 00 && mins == 00 ? `00` :
        formathours == 12 && mins > 0 ? 11 :
        formathours == 11 && mins > 0 ? 12 :
        mins > 00 ? `${11 - formathours}`.padStart(2,'0') :
        `${12 - formathours}`.padStart(2,'0')
    return `${hours}:${mins}`
  }

  console.log(WhatIsTheTime("06:35"));
  console.log(WhatIsTheTime("11:59"));
  console.log(WhatIsTheTime("12:02"));
  console.log(WhatIsTheTime("04:00"));
  console.log(WhatIsTheTime("06:00"));
  console.log(WhatIsTheTime("12:00"));