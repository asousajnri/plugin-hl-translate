export default (flags, flagToSelected) =>
  flags.map(flag => {
    if (flag.flagItemHTML === flagToSelected) {
      flag.flagItemHTML.classList.add('is-selected');
      return true;
    } else {
      flag.flagItemHTML.classList.remove('is-selected');
    }
  });
