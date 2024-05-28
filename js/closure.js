function a() {
  let k = 10;

  const t = () => {
    console.log(this.k);
  };
  t();
}

a();
