export const calculateBmi = (weight, height) => {
  const bmiValue = (weight / (((height / 100) * height) / 100)).toFixed(2)
  const bmiMessage = setBMIMessage(bmiValue);
  return [bmiValue, bmiMessage];
}

const setBMIMessage = finalBMI => {
  if (finalBMI <= 18.5) {
    return "Roses are lovely";
  }

  if (finalBMI > 18.5 && finalBMI <= 25) {
    return "Cats are the best";
  }

  if (finalBMI > 25 && finalBMI <= 30) {
    return "I love dogs"
  }

  if (finalBMI > 30) {
    return "Rabbits are cute"
  }
};

