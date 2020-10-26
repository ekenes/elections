import Color = require("esri/Color");


// function to retrieve query parameters (in this case only id)
interface UrlParams {
  year?: 2004 | 2008 | 2012 | 2016 | number,
}

const validYears = [ 2000, 2004, 2008, 2012, 2016 ];

function getUrlParams() {
  const queryParams = document.location.search.substr(1);
  let result: UrlParams = {};

  queryParams.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = parseInt(decodeURIComponent(item[1]));
  });

  return result.year;
}

// function to set an id as a url param
export function setUrlParams(year: UrlParams["year"]) {
  window.history.pushState("", "", `${window.location.pathname}?year=${year}`);
}

let year = getUrlParams();
const yearSelect = document.getElementById("year-select") as HTMLSelectElement;

if(!year){
  year = 2016;
  setUrlParams(year);
} else {
  if ( year && validYears.indexOf(year) === -1 ){
    alert("You must enter a valid U.S. presidential election year (e.g. 2004, 2008, 20012, 2016)")
    year = 2016;
    setUrlParams(year);
  }
  yearSelect.value = year.toString();
}

export const basemapPortalItem = "fbfb62f3599f41e5a77845f863e2872f";
export const statesLayerPortalItem = "6ad91dac96784d00900f90b03924028c";
export const countiesLayerPortalItem = "eeedc75c82f24ca49ccaf824665a10d0";

export const maxScale = 4622324/16;
export const referenceScale = 2311162;
export const scaleThreshold = 9244600;  // 9244649;
export const stateReferenceScale = 18489200;

export let selectedYear = year;

export let years = {
  previous: selectedYear - 4,
  next: selectedYear
};

export const results = {
  2000: {
    republican: {
      candidate: "Bush",
      electoralVotes: 271
    },
    democrat: {
      candidate: "Gore",
      electoralVotes: 266
    },
    other: {
      candidate: "Another candidate",
      electoralVotes: 0
    }
  },
  2004: {
    republican: {
      candidate: "Bush",
      electoralVotes: 286
    },
    democrat: {
      candidate: "Kerry",
      electoralVotes: 251
    },
    other: {
      candidate: "Another candidate",
      electoralVotes: 0
    }
  },
  2008: {
    republican: {
      candidate: "McCain",
      electoralVotes: 173
    },
    democrat: {
      candidate: "Obama",
      electoralVotes: 365
    },
    other: {
      candidate: "Another candidate",
      electoralVotes: 0
    }
  },
  2012: {
    republican: {
      candidate: "Romney",
      electoralVotes: 206
    },
    democrat: {
      candidate: "Obama",
      electoralVotes: 332
    },
    other: {
      candidate: "Another candidate",
      electoralVotes: 0
    }
  },
  2016: {
    republican: {
      candidate: "Trump",
      electoralVotes: 304
    },
    democrat: {
      candidate: "Clinton",
      electoralVotes: 227
    },
    other: {
      candidate: "Another candidate",
      electoralVotes: 0
    }
  }
}

export let fieldInfos = {
  title: {
    state: `{state}`,
    county: `{county} County, {state}`
  },
  democrat: {
    county: {
      previous: {
        name: `dem_${years.previous}`,
        label: `${years.previous} Democrat votes`
      },
      next: {
        name: `dem_${years.next}`,
        label: `${years.next} Democrat votes`
      },
    },
    state: {
      previous: {
        name: `SUM_dem_${years.previous}`,
        label: `${years.previous} Democrat votes`
      },
      next: {
        name: `SUM_dem_${years.next}`,
        label: `${years.next} Democrat votes`
      }
    }
  },
  republican: {
    county: {
      previous: {
        name: `rep_${years.previous}`,
        label: `${years.previous} Republican votes`
      },
      next: {
        name: `rep_${years.next}`,
        label: `${years.next} Republican votes`
      }
    },
    state: {
      previous: {
        name: `SUM_rep_${years.previous}`,
        label: `${years.previous} Republican votes`
      },
      next: {
        name: `SUM_rep_${years.next}`,
        label: `${years.next} Republican votes`
      }
    }
  },
  other: {
    county: {
      previous: {
        name: `oth_${years.previous}`,
        label: `${years.previous} Other votes`
      },
      next: {
        name: `oth_${years.next}`,
        label: `${years.next} Other votes`
      }
    },
    state: {
      previous: {
        name: `SUM_oth_${years.previous}`,
        label: `${years.previous} Other votes`
      },
      next: {
        name: `SUM_oth_${years.next}`,
        label: `${years.next} Other votes`
      }
    }
  },
  normalizationFields: {
    county: {
      previous: `TOTAL_STATE_VOTES_${years.previous}`,
      next: `TOTAL_STATE_VOTES_${years.next}`
    },
    state: {
      previous: ``,
      next: ``
    }
  }
};

// Renderer config

export const rColor = new Color("rgba(220, 75, 0, 1)");
export const dColor = new Color("rgba(60, 108, 204,1)");
export const oColor = new Color("rgba(237, 218, 0, 1)");
export const oTextColor = new Color("rgba(181, 166, 0, 1)");
export const haloColor = new Color("#f7f7f7");
export const haloSize = 1;

export const rColorCIM = rColor.toJSON();
export const dColorCIM = dColor.toJSON();
export const oColorCIM = oColor.toJSON();
export const oTextColorCIM = oTextColor.toJSON();

//////////////
// size stops
//////////////

// state results layer

export const stateResultsSizeStops = [
  { value: 0, size: 8 },
  { value: 100000, size: 10 },
  { value: 500000, size: 15 },
  { value: 1000000, size: 20 },
  { value: 5000000, size: 40 }
];

// state change layer

export const stateChangeSizeStops = [
  { value: 0, size: 8 },
  { value: 10000, size: 10 },
  { value: 50000, size: 15 },
  { value: 100000, size: 20 },
  { value: 500000, size: 30 }
];

// county layers

// size is votes as a % of total state votes

export const countySizeStops = [
  { value: 0, size: 6 },
  { value: 0.5, size: 10 },
  { value: 1, size: 20 },
  { value: 5, size: 25 },
  { value: 30, size: 40 }
];

export function setSelectedYear(year: UrlParams["year"]) {
  selectedYear = year;

  years = {
    previous: selectedYear - 4,
    next: selectedYear
  };

  fieldInfos = {
    title: {
      state: `{state}`,
      county: `{county} County, {state}`
    },
    democrat: {
      county: {
        previous: {
          name: `dem_${years.previous}`,
          label: `${years.previous} Democrat votes`
        },
        next: {
          name: `dem_${years.next}`,
          label: `${years.next} Democrat votes`
        },
      },
      state: {
        previous: {
          name: `SUM_dem_${years.previous}`,
          label: `${years.previous} Democrat votes`
        },
        next: {
          name: `SUM_dem_${years.next}`,
          label: `${years.next} Democrat votes`
        }
      }
    },
    republican: {
      county: {
        previous: {
          name: `rep_${years.previous}`,
          label: `${years.previous} Republican votes`
        },
        next: {
          name: `rep_${years.next}`,
          label: `${years.next} Republican votes`
        }
      },
      state: {
        previous: {
          name: `SUM_rep_${years.previous}`,
          label: `${years.previous} Republican votes`
        },
        next: {
          name: `SUM_rep_${years.next}`,
          label: `${years.next} Republican votes`
        }
      }
    },
    other: {
      county: {
        previous: {
          name: `oth_${years.previous}`,
          label: `${years.previous} Other votes`
        },
        next: {
          name: `oth_${years.next}`,
          label: `${years.next} Other votes`
        }
      },
      state: {
        previous: {
          name: `SUM_oth_${years.previous}`,
          label: `${years.previous} Other votes`
        },
        next: {
          name: `SUM_oth_${years.next}`,
          label: `${years.next} Other votes`
        }
      }
    },
    normalizationFields: {
      county: {
        previous: `TOTAL_STATE_VOTES_${years.previous}`,
        next: `TOTAL_STATE_VOTES_${years.next}`
      },
      state: {
        previous: ``,
        next: ``
      }
    }
  };
}