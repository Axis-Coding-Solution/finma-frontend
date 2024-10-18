import { number, object, string } from "yup";

export const MarketResearchEditModalSchema = object({
  description: string().label("Market size").required().max(120),
});

export const MarketResearchEditChartModalSchema = object({
  tam: string().label("TAM").required(),
  sam: string()
    .label("SAM")
    .required()
    .test(
      "SAM less than TAM Value",
      "SAM must be less than to TAM",
      function(value){
        const {tam} = this.parent;
        return parseFloat(value)<parseFloat(tam);
      }
    ),
  som: string()
  .label("SOM")
  .required()
  .test(
    "SOM less than SAM Value",
    "SOM must be less than to SAM",
    function(value){
      const {sam} = this.parent;
      return parseFloat(value)<parseFloat(sam);
    }
  ),
});

export const MarketGrowthEditModalSchema = object({
  marketGrowth: string().label("Market size").required().max(120),
});

export const MarketGrowthEditChartModalSchema = object({
  year1: object({
    year: number()
      .label("Year 1")
      .required()
      .min(1000, "Year must be a 4-digit number")
      .max(9999, "Year must be a 4-digit number")
      .typeError("Please enter year1!"),
    amount: number()
      .label("Amount 1")
      .required()
      .typeError("Please enter amount1!"),
  }),
  year2: object({
    year: number()
      .label("Year 2")
      .required()
      .min(1000, "Year must be a 4-digit number")
      .max(9999, "Year must be a 4-digit number")
      .typeError("Please enter year2!"),
    amount: number()
      .label("Amount 2")
      .required()
      .typeError("Please enter amount2!"),
  }),
  year3: object({
    year: number()
      .label("Year 3")
      .required()
      .min(1000, "Year must be a 4-digit number")
      .max(9999, "Year must be a 4-digit number")
      .typeError("Please enter year3!"),
    amount: number()
      .label("Amount 3")
      .required()
      .typeError("Please enter amount3!"),
  }),
  year4: object({
    year: number()
      .label("Year 4")
      .required()
      .min(1000, "Year must be a 4-digit number")
      .max(9999, "Year must be a 4-digit number")
      .typeError("Please enter year4!"),
    amount: number()
      .label("Amount 4")
      .required()
      .typeError("Please enter amount4!"),
  }),
  year5: object({
    year: number()
      .label("Year 5")
      .required()
      .min(1000, "Year must be a 4-digit number")
      .max(9999, "Year must be a 4-digit number")
      .typeError("Please enter year5!"),
    amount: number()
      .label("Amount 5")
      .required()
      .typeError("Please enter amount5!"),
  }),
  year6: object({
    year: number()
      .label("Year 6")
      .required()
      .min(1000, "Year must be a 4-digit number")
      .max(9999, "Year must be a 4-digit number")
      .typeError("Please enter year6!"),
    amount: number()
      .label("Amount 6")
      .required()
      .typeError("Please enter amount6!"),
  }),
});
