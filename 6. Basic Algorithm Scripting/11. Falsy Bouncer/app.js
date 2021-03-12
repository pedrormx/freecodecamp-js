function bouncer(arr) {
    return arr.filter(Boolean);
  }

  console.log(bouncer([true, 1==1,2!=1]))