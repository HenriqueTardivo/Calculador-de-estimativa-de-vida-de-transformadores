new Vue({
  el: "#app",
  data: {
    XKVA1: null,
    TKVA1: null,
    PW: null,
    PE: null,
    PC: null,
    PS: null,
    XKVA2: null,
    THKVA2: null,
    THEWA: null,
    THEHSA: null,
    THETOR: null,
    THEBOR: null,
    TAR: null,
    MC: null,
    PUELHS: null,
    TAUW: null,
    HHS: null,
    WCC: null,
    WTANK: null,
    MF: null,
    GFLUID: null,
    MCORE: null,
    TIMCOR: null,
    PCOE: null,
  },
  method: {
    fatorial(x) {
      return x > 1 ? x * fatorial(x - 1) : 1;
    },
  },
  computed: {
    calculateTotalLoss: function () {
      var PW = parseFloat(this.PW);
      var PS = parseFloat(this.PS);
      var PC = parseFloat(this.PC);

      var PT = PW + PS + PC;

      return "TOTAL LOSSES =" + PT;
    },
    windingConductorMaterial: function () {
      if (this.MC == 1) return "ALUMINIUM";
      else if (this.MC == 2) return "COOPER";
      else return "INVALID INPUT";
    },
    coolingFluid: function () {
      if (this.MF == 1) return "TRANSFORME OIL";
      else if (this.MF == 2) return "SILICONE";
      else if (this.MF == 3) return "HTHC";
      else return "INVALID INPUT";
    },
  },
});
