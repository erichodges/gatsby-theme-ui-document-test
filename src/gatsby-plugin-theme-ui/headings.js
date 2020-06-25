const headingBase = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
  mt: 0,
  mb: 3,
  '::before': {
    content: '" "',
    display: 'block',
    paddingTop: 10,
    marginBottom: 0,
  }
};

export default {
  h1: {
    ...headingBase,
    fontSize: 5
  },
  h2: {
    ...headingBase,
    fontSize: 4
  },
  h3: {
    ...headingBase,
    fontSize: 3
  },
  h4: {
    ...headingBase,
    fontSize: 2,
    mt: 5
  },
  h5: {
    ...headingBase,
    fontSize: 1
  },
  h6: {
    ...headingBase,
    fontSize: 0
  }
};
