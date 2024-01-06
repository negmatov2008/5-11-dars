async function done() {
  const javob = await api();
  const one = javob[0].first[0];
  const two = javob[0].second[0];
  const three = javob[0].third[0];
  const four = javob[0].four[0];
  const five = javob[0].five[0];
  const six = javob[0].six[0];
  const seven = javob[0].seven[0];
  const eight = javob[0].eight[0];
  const nine = javob[0].nine[0];
  const ten = javob[0].ten[0];
  userEl[0].innerHTML = one.company;
  aboutEl[0].innerHTML = one.position;
  time1El[0].innerHTML = one.postedAt;
  time2El[0].innerHTML = one.contract;
  time3El[0].innerHTML = one.location;
  userEl[1].innerHTML = two.company;
  aboutEl[1].innerHTML = two.position;
  time1El[1].innerHTML = two.postedAt;
  time2El[1].innerHTML = two.contract;
  time3El[1].innerHTML = two.location;
  userEl[2].innerHTML = three.company;
  aboutEl[2].innerHTML = three.position;
  time1El[2].innerHTML = three.postedAt;
  time2El[2].innerHTML = three.contract;
  time3El[2].innerHTML = three.location;
  userEl[3].innerHTML = four.company;
  aboutEl[3].innerHTML = four.position;
  time1El[3].innerHTML = four.postedAt;
  time2El[3].innerHTML = four.contract;
  time3El[3].innerHTML = four.location;
  userEl[4].innerHTML = five.company;
  aboutEl[4].innerHTML = five.position;
  time1El[4].innerHTML = five.postedAt;
  time2El[4].innerHTML = five.contract;
  time3El[4].innerHTML = five.location;
  userEl[5].innerHTML = six.company;
  aboutEl[5].innerHTML = six.position;
  time1El[5].innerHTML = six.postedAt;
  time2El[5].innerHTML = six.contract;
  time3El[5].innerHTML = six.location;
  userEl[6].innerHTML = seven.company;
  aboutEl[6].innerHTML = seven.position;
  time1El[6].innerHTML = seven.postedAt;
  time2El[6].innerHTML = seven.contract;
  time3El[6].innerHTML = seven.location;
  userEl[7].innerHTML = eight.company;
  aboutEl[7].innerHTML = eight.position;
  time1El[7].innerHTML = eight.postedAt;
  time2El[7].innerHTML = eight.contract;
  time3El[7].innerHTML = eight.location;
  userEl[8].innerHTML = nine.company;
  aboutEl[8].innerHTML = nine.position;
  time1El[8].innerHTML = nine.postedAt;
  time2El[8].innerHTML = nine.contract;
  time3El[8].innerHTML = nine.location;
  userEl[9].innerHTML = ten.company;
  aboutEl[9].innerHTML = ten.position;
  time1El[9].innerHTML = ten.postedAt;
}

async function links() {
  const javob = await api();
  const one = javob[0].first[0];
  const two = javob[0].second[0];
  const three = javob[0].third[0];
  const four = javob[0].four[0];
  const five = javob[0].five[0];
  const six = javob[0].six[0];
  const seven = javob[0].seven[0];
  const eight = javob[0].eight[0];
  const nine = javob[0].nine[0];
  const ten = javob[0].ten[0];

  const link1 = linksEl[0].children;
  link1[0].textContent = one.role;
  link1[1].textContent = one.level;
  link1[2].textContent = one.languages[0];
  link1[3].textContent = one.languages[1];
  link1[4].textContent = one.languages[2];

  const link2 = linksEl[1].children;
  link2[0].textContent = two.role;
  link2[1].textContent = two.level;
  link2[2].textContent = two.languages[0];
  link2[3].textContent = two.tools;

  const link3 = linksEl[2].children;
  link3[0].textContent = three.role;
  link3[1].textContent = three.level;
  link3[2].textContent = three.languages[0];
  link3[3].textContent = three.tools[0];
  link3[4].textContent = three.tools[1];

  const link4 = linksEl[3].children;
  link4[0].textContent = four.role;
  link4[1].textContent = four.level;
  link4[2].textContent = four.languages[0];
  link4[3].textContent = four.languages[1];

  const link5 = linksEl[4].children;
  link5[0].textContent = five.role;
  link5[1].textContent = five.level;
  link5[2].textContent = five.languages[0];
  link5[3].textContent = five.languages[1];
  link5[4].textContent = five.tools[0];

  const link6 = linksEl[5].children;
  link6[0].textContent = six.role;
  link6[1].textContent = six.level;
  link6[2].textContent = six.languages;
  link6[3].textContent = six.tools;

  const link7 = linksEl[6].children;
  link7[0].textContent = seven.role;
  link7[1].textContent = seven.level;
  link7[2].textContent = seven.languages[0];
  link7[3].textContent = seven.languages[1];
  link7[4].textContent = seven.tools[0];

  const link8 = linksEl[7].children;
  link8[0].textContent = eight.role;
  link8[1].textContent = eight.level;
  link8[2].textContent = eight.languages[0];
  link8[3].textContent = eight.tools[0];
  link8[4].textContent = eight.tools[1];

  const link9 = linksEl[8].children;
  link9[0].textContent = nine.role;
  link9[1].textContent = nine.level;
  link9[2].textContent = nine.languages[0];
  link9[3].textContent = nine.languages[1];
  link9[4].textContent = nine.tools[0];

  const link10 = linksEl[9].children;
  link10[0].textContent = ten.role;
  link10[1].textContent = ten.level;
  link10[2].textContent = ten.languages[0];
  link10[3].textContent = ten.tools[0];
  link10[4].textContent = ten.tools[1];
}
