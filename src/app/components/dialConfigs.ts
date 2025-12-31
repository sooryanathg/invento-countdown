export interface DialNumberConfig {
  offset: number;
  left: string;
  right: string;
  top: string;
  transform: string;
}

export const hoursDialConfig: DialNumberConfig[] = [
  { offset: -6, left: '0.23%', right: '92.06%', top: '5%', transform: 'matrix(0.82, 0.58, -0.62, 0.79, 90, -40)' },
  { offset: -5, left: '5%', right: '87.13%', top: '12%', transform: 'matrix(0.82, 0.58, -0.62, 0.79, 90, -20)' },
  { offset: -4, left: '10%', right: '82.13%', top: '20%', transform: 'matrix(0.82, 0.58, -0.62, 0.79, 90, 20)' },
  { offset: -3, left: '15%', right: '77.13%', top: '28%', transform: 'matrix(0.85, 0.52, -0.55, 0.83, 110, 45)' },
  { offset: -2, left: '20%', right: '72.13%', top: '35%', transform: 'matrix(0.9, 0.43, -0.46, 0.89, 130, 50)' },
  { offset: -1, left: '25%', right: '67.13%', top: '40%', transform: 'matrix(0.97, 0.26, -0.28, 0.96, 160, 40)' },
  { offset: 1, left: '67%', right: '25.13%', top: '40%', transform: 'matrix(0.9, -0.43, 0.47, 0.88, -280, -20)' },
  { offset: 2, left: '72%', right: '20.13%', top: '35%', transform: 'matrix(0.85, -0.52, 0.55, 0.83, -250, -10)' },
  { offset: 3, left: '77%', right: '15.13%', top: '28%', transform: 'matrix(0.78, -0.63, 0.66, 0.75, -230, -15)' },
  { offset: 4, left: '82%', right: '10.13%', top: '20%', transform: 'matrix(0.69, -0.73, 0.76, 0.65, -210, -40)' },
  { offset: 5, left: '87%', right: '5.13%', top: '12%', transform: 'matrix(0.69, -0.73, 0.76, 0.65, -210, -80)' },
  { offset: 6, left: '91.67%', right: '0.56%', top: '5%', transform: 'matrix(0.69, -0.73, 0.76, 0.65, -210, -100)' },
];

export const minutesDialConfig: DialNumberConfig[] = [
  { offset: -7, left: '10%', right: '82.06%', top: '26%', transform: 'matrix(0.82, 0.58, -0.62, 0.79, 90, -40)' },
  { offset: -6, left: '14%', right: '78.13%', top: '33%', transform: 'matrix(0.82, 0.58, -0.62, 0.79, 90, -30)' },
  { offset: -5, left: '17.5%', right: '74.63%', top: '37%', transform: 'matrix(0.82, 0.58, -0.62, 0.79, 90, -20)' },
  { offset: -4, left: '20.5%', right: '71.63%', top: '36%', transform: 'matrix(0.82, 0.58, -0.62, 0.79, 90, 20)' },
  { offset: -3, left: '23%', right: '69.13%', top: '36%', transform: 'matrix(0.85, 0.52, -0.55, 0.83, 110, 45)' },
  { offset: -2, left: '26%', right: '66.13%', top: '37.5%', transform: 'matrix(0.9, 0.43, -0.46, 0.89, 130, 50)' },
  { offset: -1, left: '28%', right: '64.13%', top: '40%', transform: 'matrix(0.97, 0.26, -0.28, 0.96, 160, 40)' },
  { offset: 1, left: '64%', right: '16.13%', top: '37%', transform: 'matrix(0.9, -0.43, 0.47, 0.88, -280, -20)' },
  { offset: 2, left: '66.5%', right: '26.63%', top: '40%', transform: 'matrix(0.85, -0.52, 0.55, 0.83, -250, -10)' },
  { offset: 3, left: '69%', right: '23.13%', top: '36%', transform: 'matrix(0.78, -0.63, 0.66, 0.75, -230, -15)' },
  { offset: 4, left: '71.5%', right: '20.63%', top: '35.5%', transform: 'matrix(0.69, -0.73, 0.76, 0.65, -210, -40)' },
  { offset: 5, left: '74.5%', right: '17.63%', top: '33.5%', transform: 'matrix(0.69, -0.73, 0.76, 0.65, -210, -60)' },
  { offset: 6, left: '78%', right: '14.13%', top: '31%', transform: 'matrix(0.69, -0.73, 0.76, 0.65, -210, -80)' },
  { offset: 7, left: '81%', right: '9.73%', top: '26%', transform: 'matrix(0.69, -0.73, 0.76, 0.65, -210, -100)' },
];

export const secondsDialConfig: DialNumberConfig[] = [
  { offset: -7, left: '10%', right: '82.06%', top: '26%', transform: 'matrix(0.82, 0.58, -0.62, 0.79, 90, -40)' },
  { offset: -6, left: '14%', right: '78.13%', top: '33%', transform: 'matrix(0.82, 0.58, -0.62, 0.79, 90, -30)' },
  { offset: -5, left: '17.5%', right: '74.63%', top: '37%', transform: 'matrix(0.82, 0.58, -0.62, 0.79, 90, -20)' },
  { offset: -4, left: '20.5%', right: '71.63%', top: '36%', transform: 'matrix(0.82, 0.58, -0.62, 0.79, 90, 20)' },
  { offset: -3, left: '23%', right: '69.13%', top: '36%', transform: 'matrix(0.85, 0.52, -0.55, 0.83, 110, 45)' },
  { offset: -2, left: '26%', right: '66.13%', top: '37.5%', transform: 'matrix(0.9, 0.43, -0.46, 0.89, 130, 50)' },
  { offset: -1, left: '28%', right: '64.13%', top: '40%', transform: 'matrix(0.97, 0.26, -0.28, 0.96, 160, 40)' },
  { offset: 1, left: '64%', right: '16.13%', top: '37%', transform: 'matrix(0.9, -0.43, 0.47, 0.88, -280, -20)' },
  { offset: 2, left: '66.5%', right: '26.63%', top: '40%', transform: 'matrix(0.85, -0.52, 0.55, 0.83, -250, -10)' },
  { offset: 3, left: '69%', right: '23.13%', top: '36%', transform: 'matrix(0.78, -0.63, 0.66, 0.75, -230, -15)' },
  { offset: 4, left: '71.5%', right: '20.63%', top: '35.5%', transform: 'matrix(0.69, -0.73, 0.76, 0.65, -210, -40)' },
  { offset: 5, left: '74.5%', right: '17.63%', top: '33.5%', transform: 'matrix(0.69, -0.73, 0.76, 0.65, -210, -60)' },
  { offset: 6, left: '78%', right: '14.13%', top: '31%', transform: 'matrix(0.69, -0.73, 0.76, 0.65, -210, -80)' },
  { offset: 7, left: '81%', right: '9.73%', top: '26%', transform: 'matrix(0.69, -0.73, 0.76, 0.65, -210, -100)' },
];

export interface DaysDialConfig extends DialNumberConfig {
  bottom?: string;
  specialWrapper?: boolean;
}

export const daysDialConfig: DaysDialConfig[] = [
  { offset: -3, left: '0.23%', right: '92.06%', top: '18.17%', bottom: '62.89%', transform: 'matrix(0.82, 0.58, -0.62, 0.79, 0, -50)' },
  { offset: -2, left: '10.16%', right: '82.13%', top: '32.82%', bottom: '48.25%', transform: 'matrix(0.82, 0.58, -0.62, 0.79, 0, -30)' },
  { offset: -1, left: '28.76%', right: '63.42%', top: '42.05%', bottom: '39.3%', transform: 'matrix(0.97, 0.26, -0.28, 0.96, -20, 30)' },
  { offset: 1, left: '65.29%', right: '26.94%', top: '36.13%', bottom: '45.08%', transform: 'matrix(0.9, -0.43, 0.47, 0.88, 0, 0)' },
  { offset: 2, left: '82.13%', right: '15.17%', top: '28.39%', bottom: '57.59%', transform: 'matrix(0.69, -0.73, 0.76, 0.65, 0, -50)' },
  { offset: 3, left: '91.67%', right: '5.63%', top: '9.85%', bottom: '76.13%', transform: 'matrix(0.69, -0.73, 0.76, 0.65, 0, 0)', specialWrapper: true },
];

