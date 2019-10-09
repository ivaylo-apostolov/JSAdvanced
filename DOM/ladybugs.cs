using System;
using System.Linq;

namespace _10._LadyBugs
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int[] arr = new int[n];

            string inputPosision = Console.ReadLine();

            int[] inputPosisionArray = inputPosision
                .Split()
                .Select(int.Parse)
                .ToArray();

            foreach (var item in inputPosisionArray)
            {
                if (item >= 0 && item <= arr.Length)
                {
                    for (int i = 0; i < arr.Length; i++)
                    {
                        if (item == i)
                        {
                            arr[item] = 1;
                        }
                    }
                }
            }

            string command = string.Empty;

            while ((command = Console.ReadLine()) != "end")
            {
                string[] commandArray = command.Split();

                int moveSteps = 0;

                if ((int.Parse(commandArray[0])) >= 0 && int.Parse(commandArray[0]) <= arr.Length)
                {
                    if (commandArray[1] == "right")
                    {
                        arr[int.Parse(commandArray[0])] = 0;

                        moveSteps = int.Parse(commandArray[2]);

                        for (int i = int.Parse(commandArray[0] + moveSteps); i < arr.Length; i += moveSteps)
                        {
                            if (int.Parse(commandArray[0] + moveSteps) < arr.Length
                            && arr[int.Parse(commandArray[0] + moveSteps)] != 1)
                            {
                                arr[int.Parse(commandArray[0] + moveSteps)] = 1;
                                break;
                            }
                        }
                    }
                    else if (commandArray[1] == "left")
                    {
                        arr[int.Parse(commandArray[0])] = 0;

                        moveSteps = int.Parse(commandArray[2]);

                        for (int i = int.Parse(commandArray[0]) - moveSteps; i >= 0; i -= moveSteps)
                        {
                            if (int.Parse(commandArray[0]) - moveSteps >= 0
                            && arr[int.Parse(commandArray[0]) - moveSteps] != 1)
                            {
                                arr[int.Parse(commandArray[0]) - moveSteps] = 1;
                                break;
                            }
                        }

                    }

                }
            }

            Console.WriteLine(string.Join(" ", arr));
        
        }
    }
}
    
