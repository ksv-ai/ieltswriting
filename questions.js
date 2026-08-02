// Data for 30 original IELTS Academic Writing Task 1 practice questions
// Structured as: id, type, promptText, chartConfig, modelAnswer

const IELTS_QUESTIONS = [
    // --- BAR CHARTS (6) ---
    {
        id: "b1",
        type: "bar",
        promptText: "The bar chart below shows the proportion of households in the United Kingdom that owned zero, one, or two or more cars from 1980 to 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe bar chart illustrates changes in car ownership among households in the United Kingdom over a 40-year period, from 1980 to 2020.\n\nBody Paragraph 1:\nIn 1980, the highest proportion of households (45%) owned one car. This figure rose slightly to peak at 50% in 2000, before falling back to 45% by 2020. Conversely, the percentage of households without a vehicle was relatively high in 1980 at 40%, but this figure steadily dropped in each subsequent decade, reaching a low of just 15% by 2020.\n\nBody Paragraph 2:\nThe most striking change occurred in the multiple-car ownership category. In 1980, only 15% of households owned two or more cars. However, this proportion grew consistently every decade, ultimately surging to 40% in 2020. By the end of the period, the gap between single-car and multiple-car households had narrowed significantly to just 5%.\n\nOverview:\nOverall, the percentage of households without a car experienced a significant and steady decline, while the proportion of families owning two or more cars saw a dramatic increase. Households with exactly one car remained the most common category throughout the period, despite minor fluctuations.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, the percentage of households without a car experienced a significant and steady decline, while the proportion of families owning two or more cars saw a dramatic increase.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: In 1980, the highest proportion of households (45%) owned one car.\n  - Body 2 Focus: The most striking change occurred in the multiple-car ownership category.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'bar',
            data: {
                labels: ['1980', '1990', '2000', '2010', '2020'],
                datasets: [
                    { label: 'No car', data: [40, 32, 25, 20, 15], backgroundColor: '#475569' },
                    { label: 'One car', data: [45, 48, 50, 47, 45], backgroundColor: '#3b82f6' },
                    { label: 'Two or more cars', data: [15, 20, 25, 33, 40], backgroundColor: '#10b981' }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Percentage of UK households by number of cars (1980-2020)' } },
                scales: { y: { beginAtZero: true, max: 60, title: { display: true, text: 'Percentage (%)' } } }
            }
        }
    },
    {
        id: "b2",
        type: "bar",
        promptText: "The chart below shows the average daily hours spent on leisure activities by men and women in the UK in 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe bar chart compares the average amount of time per day that British men and women devoted to five different leisure activities in the year 2022.\n\nBody Paragraph 1:\nWatching TV commanded the highest amount of daily leisure time, with men spending an average of 2.5 hours and women slightly less at 2.1 hours. Conversely, the lowest figures recorded were for reading among men (0.8 hours) and participating in sports among women (0.7 hours).\n\nBody Paragraph 2:\nRegarding the remaining activities, there were noticeable gender differences. Women spent an average of 1.8 hours socializing, which was slightly more than the 1.5 hours spent by men. Similarly, women read for 1.3 hours daily, roughly half an hour longer than men. In contrast, men spent nearly double the amount of time on sports compared to women (1.2 hours versus 0.7 hours), though time spent on hobbies was relatively equal, at 1.0 hour for men and 1.1 hours for women.\n\nOverview:\nOverall, watching television was the most popular leisure activity for both genders, while playing sports and reading were the least favored by women and men, respectively. Furthermore, men generally spent more time on sports and hobbies, whereas women dedicated more hours to reading and socializing.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, watching television was the most popular leisure activity for both genders, while playing sports and reading were the least favored by women and men, respectively.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: Watching TV commanded the highest amount of daily leisure time, with men spending an average of 2.5 hours and women slightly less at 2.1 hours.\n  - Body 2 Focus: Regarding the remaining activities, there were noticeable gender differences.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'bar',
            data: {
                labels: ['Watching TV', 'Reading', 'Sports', 'Socialising', 'Hobbies'],
                datasets: [
                    { label: 'Men', data: [2.5, 0.8, 1.2, 1.5, 1.0], backgroundColor: '#60a5fa' },
                    { label: 'Women', data: [2.1, 1.3, 0.7, 1.8, 1.1], backgroundColor: '#f472b6' }
                ]
            },
            options: {
                indexAxis: 'y', // horizontal bar
                plugins: { title: { display: true, text: 'Average daily leisure hours in the UK (2022)' } },
                scales: { x: { beginAtZero: true, title: { display: true, text: 'Hours per day' } } }
            }
        }
    },
    {
        id: "b3",
        type: "bar",
        promptText: "The chart below shows the amount of coffee and tea imported by four different countries (in thousand tonnes) in 2015. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe bar chart provides information on the volume of coffee and tea, measured in thousand tonnes, imported by Canada, the United Kingdom, the United States, and Germany in the year 2015.\n\nBody Paragraph 1:\nThe United States imported a massive 250,000 tonnes of coffee, making it by far the largest consumer of this beverage among the countries listed. Germany and Canada followed, importing 180,000 and 120,000 tonnes respectively. In stark contrast, the UK imported the least amount of coffee, at just 80,000 tonnes.\n\nBody Paragraph 2:\nRegarding tea, the pattern was markedly different. The UK stood out as the leading importer, bringing in 160,000 tonnes, exactly double its coffee imports. The USA imported the second-highest volume of tea at 90,000 tonnes. Germany and Canada imported considerably less tea, at 60,000 and 40,000 tonnes respectively, making tea significantly less popular than coffee in these two nations.\n\nOverview:\nOverall, it is evident that the USA was the largest importer of coffee, whereas the UK was the predominant importer of tea. Furthermore, coffee imports exceeded tea imports in three of the four specified countries, with the UK being the sole exception.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, it is evident that the USA was the largest importer of coffee, whereas the UK was the predominant importer of tea.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: The United States imported a massive 250,000 tonnes of coffee, making it by far the largest consumer of this beverage among the countries listed.\n  - Body 2 Focus: Regarding tea, the pattern was markedly different.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'bar',
            data: {
                labels: ['Canada', 'UK', 'USA', 'Germany'],
                datasets: [
                    { label: 'Coffee', data: [120, 80, 250, 180], backgroundColor: '#8b5cf6' },
                    { label: 'Tea', data: [40, 160, 90, 60], backgroundColor: '#14b8a6' }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Coffee and Tea Imports (Thousand Tonnes, 2015)' } }
            }
        }
    },
    {
        id: "b4",
        type: "bar",
        promptText: "The bar chart below shows the proportion of energy generated from renewable sources in four countries from 2005 to 2015. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe bar chart illustrates the percentage of total energy produced using renewable sources across four different nations (Country A, Country B, Country C, and Country D) over a ten-year period, specifically in the years 2005, 2010, and 2015.\n\nBody Paragraph 1:\nIn 2005, Country C was already the frontrunner, generating 22% of its energy from renewable sources. This figure rose steadily, reaching 28% in 2010 and culminating in a high of 35% by 2015. Country D followed a similar, albeit lower, trajectory. Starting at just 8% in 2005, its renewable energy output nearly doubled to 15% in 2010, before surging to 28% in 2015, effectively tying with Country A for the second-highest proportion.\n\nBody Paragraph 2:\nLooking at the remaining two nations, Country A began the period with 12% renewable energy. This increased moderately to 18% in 2010, and further to 25% by the end of the period. Conversely, Country B exhibited the lowest utilization of green energy throughout. Although it experienced the most significant relative growth, jumping from a mere 5% in 2005 to 12% in 2010, its final figure of 24% in 2015 still placed it at the bottom of the group.\n\nOverview:\nOverall, it is immediately apparent that the proportion of renewable energy generation increased in all four countries over the decade shown. Country C consistently led in renewable energy production, while Country B consistently lagged behind the others.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, it is immediately apparent that the proportion of renewable energy generation increased in all four countries over the decade shown.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: In 2005, Country C was already the frontrunner, generating 22% of its energy from renewable sources.\n  - Body 2 Focus: Looking at the remaining two nations, Country A began the period with 12% renewable energy.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'bar',
            data: {
                labels: ['Country A', 'Country B', 'Country C', 'Country D'],
                datasets: [
                    { label: '2005', data: [12, 5, 22, 8], backgroundColor: '#94a3b8' },
                    { label: '2010', data: [18, 12, 28, 15], backgroundColor: '#fbbf24' },
                    { label: '2015', data: [25, 24, 35, 28], backgroundColor: '#22c55e' }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Renewable Energy Generation (%)' } },
                scales: { y: { max: 50 } }
            }
        }
    },
    {
        id: "b5",
        type: "bar",
        promptText: "The chart below shows the projected sales of three types of electric vehicles in a country from 2025 to 2035 (in thousands). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe bar chart provides forecasts for the sales volume of three distinct categories of electric vehicles (EVs)—Compact, SUV, and Luxury—within a particular country, measured in thousands, for the years 2025, 2030, and 2035.\n\nBody Paragraph 1:\nIn 2025, Compact electric vehicles are forecast to lead the market with 150,000 units sold. This figure is expected to rise significantly to 220,000 by 2030, before reaching a peak of 280,000 by 2035. In contrast, Luxury EVs are projected to remain the least popular category throughout the period. Their sales are anticipated to start at 50,000 units in 2025, growing moderately to 75,000 in 2030, and eventually hitting 110,000 by 2035.\n\nBody Paragraph 2:\nThe most dramatic increase, however, is seen in the SUV category. Starting at 100,000 projected sales in 2025, the figure is expected to nearly double to 180,000 by 2030. By 2035, the forecast suggests a massive surge to 310,000 units, allowing SUVs to surpass Compact cars and claim the largest share of the electric vehicle market.\n\nOverview:\nOverall, it is projected that the sales of all three types of electric vehicles will experience substantial growth over the ten-year period. While Compact EVs are expected to be the highest-selling category initially, SUV sales are predicted to overtake them by the end of the decade, becoming the most popular vehicle type.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, it is projected that the sales of all three types of electric vehicles will experience substantial growth over the ten-year period.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: In 2025, Compact electric vehicles are forecast to lead the market with 150,000 units sold.\n  - Body 2 Focus: The most dramatic increase, however, is seen in the SUV category.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'bar',
            data: {
                labels: ['2025', '2030', '2035'],
                datasets: [
                    { label: 'Compact', data: [150, 220, 280], backgroundColor: '#facc15' },
                    { label: 'SUV', data: [100, 180, 310], backgroundColor: '#f87171' },
                    { label: 'Luxury', data: [50, 75, 110], backgroundColor: '#c084fc' }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Projected EV Sales (Thousands)' } }
            }
        }
    },
    {
        id: "b6",
        type: "bar",
        promptText: "The bar chart below shows the main reasons for studying reported by students in three different age groups in 2021. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe bar chart illustrates the primary motivations for undertaking educational courses among three distinct age demographics (Under 26, 26-39, and 40 and over) in the year 2021.\n\nBody Paragraph 1:\nFor the youngest demographic, those under 26 years of age, career advancement was overwhelmingly the most common motivation, cited by a massive 80% of students. This reason became progressively less important with age, dropping to 65% for the 26-39 age group, and plummeting to just 30% for those aged 40 and over.\n\nBody Paragraph 2:\nConversely, the motivation of personal interest exhibited the exact opposite trend. Only 10% of students under 26 cited this as their primary reason. This figure more than doubled to 25% for the middle age group (26-39) and surged dramatically to 60% for the oldest demographic (40 and over), making it their leading reason for pursuing education.\n\nBody Paragraph 3:\nFinally, studying as a direct requirement from an employer was the least common factor overall. Interestingly, this motivation remained entirely static, representing exactly 10% of students in every single age category.\n\nOverview:\nOverall, there is a clear correlation between a student's age and their reasons for studying. Younger students are predominantly driven by the desire for career advancement, whereas older individuals are significantly more motivated by personal interest. Studying due to an employer's requirement remained consistently low across all age brackets.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, there is a clear correlation between a student's age and their reasons for studying.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: For the youngest demographic, those under 26 years of age, career advancement was overwhelmingly the most common motivation, cited by a massive 80% of students.\n  - Body 2 Focus: Conversely, the motivation of personal interest exhibited the exact opposite trend.\n  - Body 3 Focus: Finally, studying as a direct requirement from an employer was the least common factor overall.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'bar',
            data: {
                labels: ['Under 26', '26-39', '40 and over'],
                datasets: [
                    { label: 'Career advancement', data: [80, 65, 30], backgroundColor: '#3b82f6' },
                    { label: 'Personal interest', data: [10, 25, 60], backgroundColor: '#ec4899' },
                    { label: 'Employer requirement', data: [10, 10, 10], backgroundColor: '#9ca3af' }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Reasons for studying by age group (%)' } },
                scales: { y: { max: 100 } }
            }
        }
    },

    // --- LINE GRAPHS (6) ---
    {
        id: "l1",
        type: "line",
        promptText: "The graph below shows the changes in the number of tourists visiting three different regions of a country between 1990 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe line graph provides information regarding the number of tourist visits to three distinct regions within a country (Coastal, Mountains, and Cities) over a 30-year period, from 1990 to 2020.\n\nBody Paragraph 1:\nIn 1990, the Coastal region was the most visited, attracting 40,000 tourists. This figure rose steadily, reaching 90,000 by 2020. The Mountains, conversely, consistently received the fewest visitors, starting at 20,000 in 1990 and climbing moderately to just over 40,000 by the end of the period, despite a brief dip around 2015.\n\nBody Paragraph 2:\nThe Cities region demonstrated the most dramatic upward trend. Starting at 50,000 visitors in 1990, the numbers initially dipped to 45,000 in 2000. However, from 2000 onwards, there was a sharp and continuous increase, culminating in 80,000 visitors in 2020, making it the second most popular destination, closely following the Coastal areas.\n\nOverview:\nOverall, it is clear that tourist numbers increased across all three regions over the given timeframe. While the Coastal region remained the most popular destination throughout, the Cities region experienced the most significant growth, overtaking the Coastal area briefly before finishing slightly behind.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, it is clear that tourist numbers increased across all three regions over the given timeframe.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: In 1990, the Coastal region was the most visited, attracting 40,000 tourists.\n  - Body 2 Focus: The Cities region demonstrated the most dramatic upward trend.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'line',
            data: {
                labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020'],
                datasets: [
                    { label: 'Coastal', data: [40, 45, 55, 60, 75, 85, 90], borderColor: '#0ea5e9', tension: 0.1 },
                    { label: 'Mountains', data: [20, 22, 28, 35, 40, 38, 42], borderColor: '#10b981', tension: 0.1 },
                    { label: 'Cities', data: [50, 48, 45, 50, 65, 75, 80], borderColor: '#f59e0b', tension: 0.1 }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Tourist visits by region (thousands)' } },
                scales: { y: { beginAtZero: true } }
            }
        }
    },
    {
        id: "l2",
        type: "line",
        promptText: "The graph below shows the average monthly rainfall (in mm) in two cities over the course of a year. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe line graph compares the average amount of rainfall, measured in millimeters (mm), in City X and City Y over a twelve-month period.\n\nBody Paragraph 1:\nLooking first at City X, the year begins with relatively low rainfall, starting at 45mm in January and hovering around 50mm until March. From April onwards, rainfall increases steadily, reaching a peak of 120mm in July. Following this wet summer period, the precipitation levels gradually decline throughout the autumn, ending the year back at 50mm in December.\n\nBody Paragraph 2:\nIn stark contrast, City Y experiences its wettest conditions at the beginning and end of the year. January sees the highest rainfall at 130mm, which then declines consistently month by month, plummeting to a low of just 15mm in July. During the latter half of the year, City Y's rainfall climbs sharply once again, returning to 120mm by December. Notably, the rainfall figures for both cities intersect in April and September/October, marking the transitional periods between their respective dry and wet seasons.\n\nOverview:\nOverall, the two cities display distinctly opposite rainfall patterns throughout the year. City X experiences its heaviest rainfall during the summer months, whereas City Y receives the majority of its precipitation in the winter.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, the two cities display distinctly opposite rainfall patterns throughout the year.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: Looking first at City X, the year begins with relatively low rainfall, starting at 45mm in January and hovering around 50mm until March.\n  - Body 2 Focus: In stark contrast, City Y experiences its wettest conditions at the beginning and end of the year.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    { label: 'City X', data: [45, 40, 50, 60, 80, 110, 120, 115, 90, 70, 55, 50], borderColor: '#3b82f6', tension: 0.4 },
                    { label: 'City Y', data: [130, 110, 95, 70, 40, 20, 15, 25, 45, 80, 100, 120], borderColor: '#f43f5e', tension: 0.4 }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Average monthly rainfall (mm)' } },
                scales: { y: { beginAtZero: true } }
            }
        }
    },
    {
        id: "l3",
        type: "line",
        promptText: "The line graph below shows the percentage of people using various social media platforms in a particular country from 2012 to 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe line graph illustrates the changing proportions of the population using three different social media platforms (Platform A, B, and C) in a specific country over a ten-year period from 2012 to 2022.\n\nBody Paragraph 1:\nPlatform A began the period as the second most popular network, with 15% of the population using it in 2012. It experienced rapid and consistent growth, overtaking Platform B by 2015, and peaking at 85% adoption by 2022, making it the most dominant platform. Similarly, Platform C, which had zero users in 2012, saw a massive surge in popularity. Its user base grew exponentially, particularly after 2014, reaching a substantial 65% by the end of the ten-year period.\n\nBody Paragraph 2:\nConversely, Platform B was the market leader in 2012, boasting a 50% usage rate. However, unlike its competitors, it suffered a steady and uninterrupted decline. By 2022, its user base had plummeted to just 15%, rendering it the least popular of the three platforms.\n\nOverview:\nOverall, Platforms A and C experienced significant upward trends in user engagement, eventually dominating the market. In contrast, Platform B saw a continuous decline in its user base throughout the entire decade.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, Platforms A and C experienced significant upward trends in user engagement, eventually dominating the market.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: Platform A began the period as the second most popular network, with 15% of the population using it in 2012.\n  - Body 2 Focus: Conversely, Platform B was the market leader in 2012, boasting a 50% usage rate.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'line',
            data: {
                labels: ['2012', '2014', '2016', '2018', '2020', '2022'],
                datasets: [
                    { label: 'Platform A', data: [15, 30, 55, 70, 80, 85], borderColor: '#2563eb', tension: 0.1 },
                    { label: 'Platform B', data: [50, 45, 40, 35, 25, 15], borderColor: '#eab308', tension: 0.1 },
                    { label: 'Platform C', data: [0, 5, 15, 35, 55, 65], borderColor: '#9333ea', tension: 0.1 }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Social Media Usage (%)' } }
            }
        }
    },
    {
        id: "l4",
        type: "line",
        promptText: "The graph below shows the production of three different agricultural crops in a region between 2000 and 2020 (in million tonnes). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe line graph provides data regarding the annual yield of three distinct agricultural crops—Wheat, Corn, and Rice—produced in a specific region over a twenty-year timeframe, from 2000 to 2020, measured in million tonnes.\n\nBody Paragraph 1:\nIn the year 2000, wheat was the primary crop, with a production volume of 15 million tonnes. This figure rose steadily throughout the period, reaching 20 million tonnes by 2010 and ending the period at 23 million tonnes. Rice, on the other hand, consistently remained the least produced crop. Starting at 8 million tonnes in 2000, its yield experienced a very slow and gradual increase, peaking at 11 million tonnes in 2015 before slightly dipping back to 10 million tonnes by 2020.\n\nBody Paragraph 2:\nThe most striking feature of the graph is the trajectory of corn production. Beginning at 10 million tonnes in 2000, it saw moderate growth to 12 million by 2005. However, from 2005 onwards, corn yields accelerated rapidly. Production skyrocketed to 17 million tonnes in 2010, overtook wheat shortly after, and culminated in a massive harvest of 32 million tonnes by 2020, making it the most abundantly produced crop in the region.\n\nOverview:\nOverall, the production of all three crops experienced an upward trend over the two decades. While wheat was initially the most heavily produced crop, corn saw the most dramatic increase, eventually surpassing wheat to become the dominant agricultural output by a significant margin.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, the production of all three crops experienced an upward trend over the two decades.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: In the year 2000, wheat was the primary crop, with a production volume of 15 million tonnes.\n  - Body 2 Focus: The most striking feature of the graph is the trajectory of corn production.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'line',
            data: {
                labels: ['2000', '2005', '2010', '2015', '2020'],
                datasets: [
                    { label: 'Wheat', data: [15, 18, 20, 21, 23], borderColor: '#fbbf24', tension: 0.1 },
                    { label: 'Corn', data: [10, 12, 17, 25, 32], borderColor: '#f97316', tension: 0.1 },
                    { label: 'Rice', data: [8, 9, 10, 11, 10], borderColor: '#4ade80', tension: 0.1 }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Crop Production (Million Tonnes)' } }
            }
        }
    },
    {
        id: "l5",
        type: "line",
        promptText: "The line graph below shows the unemployment rate in three countries over a 10-year period (2010-2020). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe line graph compares the fluctuating rates of unemployment in three distinct nations (Country M, Country N, and Country O) over a decade, spanning from 2010 to 2020.\n\nBody Paragraph 1:\nLooking at the countries with the highest initial rates, Country O began the period with a peak unemployment rate of 12.0% in 2010. This figure declined sharply and consistently over the next eight years, reaching a low of 6.5% in 2018, before rising again to 8.5% in 2020. Similarly, Country M started with an 8.5% unemployment rate, which initially rose slightly to 9.2% in 2012. However, it then mirrored Country O's downward trajectory, falling steadily to its lowest point of 5.2% in 2018. By 2020, joblessness in Country M had rebounded to 7.8%.\n\nBody Paragraph 2:\nIn stark contrast, the unemployment rate in Country N remained relatively static throughout the entire ten-year timeframe. Starting at 5.0% in 2010, the rate fluctuated only marginally between 4.8% and 5.5%, finishing the period exactly where it started, making it the country with the most stable employment market.\n\nOverview:\nOverall, while the unemployment rates in Country M and Country O experienced significant volatility and an overall downward trend for most of the period, Country N maintained a remarkably stable and consistently low level of joblessness. Despite initial decreases, both Country M and Country O saw a resurgence in unemployment at the end of the decade.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, while the unemployment rates in Country M and Country O experienced significant volatility and an overall downward trend for most of the period, Country N maintained a remarkably stable and consistently low level of joblessness.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: Looking at the countries with the highest initial rates, Country O began the period with a peak unemployment rate of 12.0% in 2010.\n  - Body 2 Focus: In stark contrast, the unemployment rate in Country N remained relatively static throughout the entire ten-year timeframe.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'line',
            data: {
                labels: ['2010', '2012', '2014', '2016', '2018', '2020'],
                datasets: [
                    { label: 'Country M', data: [8.5, 9.2, 7.5, 6.0, 5.2, 7.8], borderColor: '#1d4ed8', tension: 0.2 },
                    { label: 'Country N', data: [5.0, 4.8, 5.5, 5.2, 4.9, 5.5], borderColor: '#b91c1c', tension: 0.2 },
                    { label: 'Country O', data: [12.0, 10.5, 8.0, 7.2, 6.5, 8.5], borderColor: '#047857', tension: 0.2 }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Unemployment Rate (%)' } },
                scales: { y: { min: 0, max: 15 } }
            }
        }
    },
    {
        id: "l6",
        type: "line",
        promptText: "The chart below shows the average global temperature anomalies from 1980 to 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe line graph illustrates the global temperature anomalies, measured in degrees Celsius (°C), over a forty-year period from 1980 to 2020.\n\nBody Paragraph 1:\nLooking at the first two decades, the temperature anomaly started at 0.25°C in 1980. This figure rose steadily, reaching 0.40°C by 1990. The rate of increase then slowed slightly over the next ten years, with the anomaly edging up by only 0.05°C to reach 0.45°C in the year 2000.\n\nBody Paragraph 2:\nHowever, the trend accelerated markedly from 2000 onwards. The anomaly surged to 0.70°C by 2010, which was the largest decade-on-decade increase up to that point. This rapid warming continued unabated over the final decade, with the temperature anomaly skyrocketing to a peak of 1.05°C by 2020, representing a total increase of 0.8°C since 1980.\n\nOverview:\nOverall, it is immediately apparent that global temperatures have experienced a continuous and significant upward trend over the four decades. The most rapid period of warming occurred in the latter half of the given timeframe.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, it is immediately apparent that global temperatures have experienced a continuous and significant upward trend over the four decades.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: Looking at the first two decades, the temperature anomaly started at 0.25°C in 1980.\n  - Body 2 Focus: However, the trend accelerated markedly from 2000 onwards.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'line',
            data: {
                labels: ['1980', '1990', '2000', '2010', '2020'],
                datasets: [
                    { label: 'Temperature Anomaly (°C)', data: [0.25, 0.40, 0.45, 0.70, 1.05], borderColor: '#dc2626', backgroundColor: 'rgba(220, 38, 38, 0.2)', fill: true, tension: 0.3 }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Global Temperature Anomaly (°C)' } }
            }
        }
    },

    // --- PIE CHARTS (5) ---
    {
        id: "p1",
        type: "pie",
        promptText: "The pie charts below show the primary sources of energy in a country in 1990 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe two pie charts compare the proportion of energy generated from various sources in a specific country in the years 1990 and 2020.\n\nBody Paragraph 1:\nIn 1990, coal was overwhelmingly the dominant energy source, accounting for nearly half (45%) of all energy produced. By 2020, however, its share had more than halved to just 20%. Conversely, the reliance on natural gas and renewable energy saw substantial growth. Natural gas rose from 15% to 25%, while renewables experienced a massive tenfold increase, jumping from a mere 2% in 1990 to 20% by 2020.\n\nBody Paragraph 2:\nMeanwhile, the proportion of energy derived from oil saw a slight decrease, falling from 30% to 25%. Nuclear power remained the smallest contributor in both years, although its share did increase marginally from 8% to 10%.\n\nOverview:\nOverall, it is evident that there was a significant shift away from fossil fuels, particularly coal, towards more sustainable and cleaner energy sources such as natural gas and renewables over the 30-year period. Despite these changes, oil usage remained relatively stable.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, it is evident that there was a significant shift away from fossil fuels, particularly coal, towards more sustainable and cleaner energy sources such as natural gas and renewables over the 30-year period.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: In 1990, coal was overwhelmingly the dominant energy source, accounting for nearly half (45%) of all energy produced.\n  - Body 2 Focus: Meanwhile, the proportion of energy derived from oil saw a slight decrease, falling from 30% to 25%.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'pie',
            data: {
                labels: ['Coal', 'Oil', 'Natural Gas', 'Nuclear', 'Renewable'],
                datasets: [
                    { label: '1990', data: [45, 30, 15, 8, 2], backgroundColor: ['#334155', '#ea580c', '#3b82f6', '#8b5cf6', '#10b981'] },
                    { label: '2020', data: [20, 25, 25, 10, 20], backgroundColor: ['#334155', '#ea580c', '#3b82f6', '#8b5cf6', '#10b981'] }
                ]
            },
            options: {
                plugins: { 
                    title: { display: true, text: 'Energy Sources: Outer ring (2020), Inner ring (1990)' },
                    tooltip: { callbacks: { label: function(context) { return context.dataset.label + ': ' + context.formattedValue + '%'; } } }
                }
            }
        }
    },
    {
        id: "p2",
        type: "pie",
        promptText: "The charts below show the proportion of water usage for different sectors in three regions of the world. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe pie charts illustrate the percentage of total water consumption dedicated to three distinct sectors—agriculture, industry, and domestic use—across three global regions: North America, South America, and Asia.\n\nBody Paragraph 1:\nIn Asia, the reliance on water for agriculture is overwhelmingly dominant, constituting a massive 80% of total usage. Domestic and industrial consumption are comparatively negligible, representing just 8% and 12% respectively. Similarly, South America allocates the vast majority of its water (70%) to agricultural purposes. However, it directs a slightly larger portion to domestic use (20%) and only 10% to industry.\n\nBody Paragraph 2:\nNorth America presents a markedly different profile. Here, the industrial sector is the primary consumer of water, taking up nearly half (45%) of the total supply. Agriculture remains significant but is noticeably lower than in the other regions, standing at 40%. Meanwhile, domestic water usage in North America accounts for 15%, which is slightly lower than that of South America but nearly double the proportion used in Asia.\n\nOverview:\nOverall, agriculture accounts for the largest proportion of water usage in both South America and Asia. In contrast, industrial usage dominates water consumption in North America, highlighting a stark difference in regional economic priorities.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, agriculture accounts for the largest proportion of water usage in both South America and Asia.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: In Asia, the reliance on water for agriculture is overwhelmingly dominant, constituting a massive 80% of total usage.\n  - Body 2 Focus: North America presents a markedly different profile.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'doughnut',
            data: {
                labels: ['Agriculture', 'Industrial', 'Domestic'],
                datasets: [
                    { label: 'North America', data: [40, 45, 15], backgroundColor: ['#4ade80', '#94a3b8', '#60a5fa'] },
                    { label: 'South America', data: [70, 10, 20], backgroundColor: ['#4ade80', '#94a3b8', '#60a5fa'] },
                    { label: 'Asia', data: [80, 12, 8], backgroundColor: ['#4ade80', '#94a3b8', '#60a5fa'] }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Water Usage by Region (Inner=NA, Middle=SA, Outer=Asia)' } }
            }
        }
    },
    {
        id: "p3",
        type: "pie",
        promptText: "The pie chart below shows the breakdown of a university's budget expenditure for the year 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe pie chart details how a university allocated its financial resources across five different categories during the year 2022.\n\nBody Paragraph 1:\nSpecifically, a staggering 55% of the university's budget was dedicated to paying its staff. This single expense dwarfed all other financial commitments. The second largest area of expenditure was research, which accounted for 15% of the total budget, representing less than a third of the amount spent on wages.\n\nBody Paragraph 2:\nThe remaining 30% of the budget was divided among the final three categories. Infrastructure maintenance and development required 12% of the funds. This was closely followed by student services, which received exactly a tenth (10%) of the budget. Finally, the smallest allocation of funds went towards Library and IT services, taking up just 8% of the university's total annual expenditure.\n\nOverview:\nOverall, it is clear that staff salaries constituted the vast majority of the institution's expenditure, absorbing more than half of the total budget. The remaining funds were distributed relatively evenly among research, infrastructure, student services, and library and IT resources.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, it is clear that staff salaries constituted the vast majority of the institution's expenditure, absorbing more than half of the total budget.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: Specifically, a staggering 55% of the university's budget was dedicated to paying its staff.\n  - Body 2 Focus: The remaining 30% of the budget was divided among the final three categories.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'pie',
            data: {
                labels: ['Staff Salaries', 'Research', 'Infrastructure', 'Student Services', 'Library & IT'],
                datasets: [{
                    data: [55, 15, 12, 10, 8],
                    backgroundColor: ['#2563eb', '#16a34a', '#d97706', '#9333ea', '#e11d48']
                }]
            },
            options: {
                plugins: { title: { display: true, text: 'University Budget Expenditure 2022 (%)' } }
            }
        }
    },
    {
        id: "p4",
        type: "pie",
        promptText: "The charts below show the reasons why people travelled to a specific city in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe pie chart provides a breakdown of the various transportation methods utilized by commuters to reach their workplaces in a particular city during the year 2023.\n\nBody Paragraph 1:\nFocusing on motorized transport, private cars dominated the daily commute, accounting for exactly half (50%) of all journeys to work. Public transport was the second most common choice, making up a combined 30% of the total. Within this category, taking the bus was more popular than taking the train, representing 18% and 12% of commuters, respectively.\n\nBody Paragraph 2:\nIn contrast, non-motorized and active methods of transport were far less common. Cycling was chosen by 12% of commuters, making it exactly as popular as taking the train. Finally, walking was the least utilized mode of transport overall, with only 8% of the city's workforce choosing to commute on foot.\n\nOverview:\nOverall, it is clear that driving a private car was overwhelmingly the most popular mode of transport. Public transportation also played a significant role, while active methods such as walking and cycling were the least favored options.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, it is clear that driving a private car was overwhelmingly the most popular mode of transport.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: Focusing on motorized transport, private cars dominated the daily commute, accounting for exactly half (50%) of all journeys to work.\n  - Body 2 Focus: In contrast, non-motorized and active methods of transport were far less common.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'doughnut',
            data: {
                labels: ['Holiday', 'Business', 'Visiting Friends/Family', 'Other'],
                datasets: [
                    { label: '2010', data: [45, 30, 15, 10], backgroundColor: ['#f43f5e', '#3b82f6', '#10b981', '#94a3b8'] },
                    { label: '2020', data: [30, 20, 40, 10], backgroundColor: ['#f43f5e', '#3b82f6', '#10b981', '#94a3b8'] }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Reasons for Travel: Inner (2010), Outer (2020)' } }
            }
        }
    },
    {
        id: "p5",
        type: "pie",
        promptText: "The pie charts show the market share of smartphone brands in a country for 2015 and 2021. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe pie chart illustrates the primary reasons cited by employees for leaving their jobs, based on a survey conducted in 2021.\n\nBody Paragraph 1:\nLooking at the most prominent reasons, inadequate salary was the dominant factor, cited by more than a third (35%) of the surveyed employees. The desire for better career opportunities was the second most common motivation, accounting for 25% of resignations. Together, these two career and finance-related factors were responsible for 60% of all staff turnover.\n\nBody Paragraph 2:\nRegarding workplace environment and logistics, poor management was a significant issue, pushing 20% of employees to leave their positions. A poor work-life balance was cited by 15% of respondents. Finally, a long commute was the least pressing concern, driving only 5% of employees to resign from their jobs.\n\nOverview:\nOverall, financial dissatisfaction was the most significant factor driving employee turnover. Lack of career progression and poor management also contributed notably, while long commutes were the least common reason for resigning.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, financial dissatisfaction was the most significant factor driving employee turnover.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: Looking at the most prominent reasons, inadequate salary was the dominant factor, cited by more than a third (35%) of the surveyed employees.\n  - Body 2 Focus: Regarding workplace environment and logistics, poor management was a significant issue, pushing 20% of employees to leave their positions.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'pie',
            data: {
                labels: ['Brand X', 'Brand Y', 'Brand Z', 'Others'],
                datasets: [
                    { label: '2015', data: [40, 20, 10, 30], backgroundColor: ['#3b82f6', '#ef4444', '#10b981', '#64748b'] },
                    { label: '2021', data: [35, 45, 15, 5], backgroundColor: ['#3b82f6', '#ef4444', '#10b981', '#64748b'] }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Smartphone Market Share: Inner(2015), Outer(2021)' } }
            }
        }
    },

    // --- TABLES (4) ---
    {
        id: "t1",
        type: "html",
        promptText: "The table below shows the percentage of the population aged 65 and over in three countries in 2000 and 2020, along with projections for 2040. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe table provides data on the proportion of elderly citizens (aged 65 and over) in Japan, Sweden, and the USA in the years 2000 and 2020, as well as estimated figures for 2040.\n\nBody Paragraph 1:\nIn 2000, Japan had the highest proportion of citizens aged 65 and over at 17.0%, closely followed by Sweden at 15.3%, while the USA had the lowest at 12.4%. By 2020, these figures had risen in all three countries. Japan experienced the most dramatic increase, soaring to 28.5%. Sweden and the USA saw more moderate growth, reaching 20.3% and 16.5% respectively.\n\nBody Paragraph 2:\nLooking ahead to 2040, the projections indicate a continuation of this aging trend. Japan is expected to see over a third of its population (35.0%) aged 65 or older. Similarly, the elderly demographics in Sweden and the USA are predicted to expand to 25.1% and 21.4%, widening the gap between Japan and the other two western nations.\n\nOverview:\nOverall, it is evident that the aging population has grown across all three nations, and this upward trend is projected to continue into 2040. Japan consistently possessed, and is expected to maintain, the highest percentage of elderly residents among the three countries.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, it is evident that the aging population has grown across all three nations, and this upward trend is projected to continue into 2040.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: In 2000, Japan had the highest proportion of citizens aged 65 and over at 17.0%, closely followed by Sweden at 15.3%, while the USA had the lowest at 12.4%.\n  - Body 2 Focus: Looking ahead to 2040, the projections indicate a continuation of this aging trend.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        htmlContent: `
            <h3>Population aged 65+ (%)</h3>
            <table class="t-table">
                <tr><th>Country</th><th>2000</th><th>2020</th><th>2040 (Projected)</th></tr>
                <tr><td>Japan</td><td>17.0%</td><td>28.5%</td><td>35.0%</td></tr>
                <tr><td>Sweden</td><td>15.3%</td><td>20.3%</td><td>25.1%</td></tr>
                <tr><td>USA</td><td>12.4%</td><td>16.5%</td><td>21.4%</td></tr>
            </table>
        `
    },
    {
        id: "t2",
        type: "html",
        promptText: "The table below shows information about public transport usage in four different cities in 2019. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe table compares four major global cities (London, New York, Tokyo, and Paris) in terms of daily public transport ridership, average commute times, and the cost of a standard ticket in 2019.\n\nBody Paragraph 1:\nLooking at ridership and cost, Tokyo's system served a massive 8.5 million passengers daily, significantly more than the other cities. Despite this high volume, a ticket cost just $2.00, making it the most affordable option. New York and London saw 5.5 and 4.8 million daily riders respectively. London's system was notably the most expensive, with tickets costing $3.50, while New York's stood at $2.75. Paris had the lowest ridership at 4.2 million, with tickets priced reasonably at $2.20.\n\nBody Paragraph 2:\nIn terms of efficiency, Parisians enjoyed the shortest average commute time at 38 minutes, closely followed by Tokyo at 40 minutes. London commuters spent an average of 45 minutes travelling, whereas New Yorkers endured the longest journeys, averaging 52 minutes.\n\nOverview:\nOverall, Tokyo possessed by far the highest daily ridership, yet boasted one of the shortest average commute times and the cheapest ticket prices. Conversely, New York experienced the longest commutes despite having lower ridership than Tokyo, while London had the most expensive transit system.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, Tokyo possessed by far the highest daily ridership, yet boasted one of the shortest average commute times and the cheapest ticket prices.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: Looking at ridership and cost, Tokyo's system served a massive 8.5 million passengers daily, significantly more than the other cities.\n  - Body 2 Focus: In terms of efficiency, Parisians enjoyed the shortest average commute time at 38 minutes, closely followed by Tokyo at 40 minutes.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        htmlContent: `
            <h3>Public Transport Usage (2019)</h3>
            <table class="t-table">
                <tr><th>City</th><th>Daily Ridership (Millions)</th><th>Avg. Commute Time (mins)</th><th>Ticket Price ($)</th></tr>
                <tr><td>London</td><td>4.8</td><td>45</td><td>3.50</td></tr>
                <tr><td>New York</td><td>5.5</td><td>52</td><td>2.75</td></tr>
                <tr><td>Tokyo</td><td>8.5</td><td>40</td><td>2.00</td></tr>
                <tr><td>Paris</td><td>4.2</td><td>38</td><td>2.20</td></tr>
            </table>
        `
    },
    {
        id: "t3",
        type: "html",
        promptText: "The table below compares the nutritional content of four different types of fast food. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe table compares the nutritional profile—specifically calories, protein, fat, and carbohydrates—of 100-gram portions of four popular fast-food items: hamburgers, pizza, fried chicken, and French fries.\n\nBody Paragraph 1:\nIn terms of caloric content and fat, fried chicken tops the list with 320 kcal and 20g of fat per 100g serving. French fries are closely behind with 310 kcal, though they contain less fat at 15g. Pizza and hamburgers are comparatively lower in calories, providing 280 kcal and 250 kcal respectively, and contain 12g and 14g of fat.\n\nBody Paragraph 2:\nLooking at carbohydrates and protein, French fries are overwhelmingly carbohydrate-heavy, containing 40g, which is significantly more than pizza (33g). Hamburgers and fried chicken contain much fewer carbs at 20g and 15g. However, fried chicken and hamburgers provide the most protein (14g and 12g respectively), whereas French fries offer a mere 3g of protein, making them the least protein-rich food on the list.\n\nOverview:\nOverall, fried chicken is the most calorie-dense and fat-rich option, while French fries contain the highest amount of carbohydrates. Conversely, hamburgers offer the most balanced nutritional profile, being the lowest in calories and relatively high in protein.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, fried chicken is the most calorie-dense and fat-rich option, while French fries contain the highest amount of carbohydrates.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: In terms of caloric content and fat, fried chicken tops the list with 320 kcal and 20g of fat per 100g serving.\n  - Body 2 Focus: Looking at carbohydrates and protein, French fries are overwhelmingly carbohydrate-heavy, containing 40g, which is significantly more than pizza (33g).\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        htmlContent: `
            <h3>Nutritional Content per 100g</h3>
            <table class="t-table">
                <tr><th>Food Type</th><th>Calories (kcal)</th><th>Protein (g)</th><th>Fat (g)</th><th>Carbs (g)</th></tr>
                <tr><td>Hamburger</td><td>250</td><td>12</td><td>14</td><td>20</td></tr>
                <tr><td>Pizza</td><td>280</td><td>11</td><td>12</td><td>33</td></tr>
                <tr><td>Fried Chicken</td><td>320</td><td>14</td><td>20</td><td>15</td></tr>
                <tr><td>French Fries</td><td>310</td><td>3</td><td>15</td><td>40</td></tr>
            </table>
        `
    },
    {
        id: "t4",
        type: "html",
        promptText: "The table below shows the results of a survey on consumer satisfaction with three different supermarket chains. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe table presents the results of a consumer survey detailing satisfaction levels regarding the quality of goods, customer service, and value for money across three different supermarket chains (Chain A, Chain B, and Chain C).\n\nBody Paragraph 1:\nFocusing on product quality and service, Chain C was clearly the most highly regarded. It scored an impressive 92% for the quality of its goods and 85% for its customer service. Chain A followed, with respectable ratings of 85% for quality and 78% for service. In contrast, Chain B was the least favored in these areas, scoring only 72% for quality and 65% for customer service.\n\nBody Paragraph 2:\nHowever, when considering value for money, the trend was entirely reversed. Chain B was the undisputed leader in this category, with a massive 88% satisfaction rating. Chain A followed in second place with 65%. Meanwhile, despite its high quality and excellent service, Chain C was considered the worst value for money, satisfying only 55% of consumers in this regard.\n\nOverview:\nOverall, Chain C achieved the highest ratings for both quality and customer service, while Chain B excelled exclusively in value for money. Chain A generally received moderate ratings across all three categories.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, Chain C achieved the highest ratings for both quality and customer service, while Chain B excelled exclusively in value for money.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: Focusing on product quality and service, Chain C was clearly the most highly regarded.\n  - Body 2 Focus: However, when considering value for money, the trend was entirely reversed.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        htmlContent: `
            <h3>Consumer Satisfaction Ratings (%)</h3>
            <table class="t-table">
                <tr><th>Supermarket</th><th>Quality of Goods</th><th>Customer Service</th><th>Value for Money</th></tr>
                <tr><td>Chain A</td><td>85%</td><td>78%</td><td>65%</td></tr>
                <tr><td>Chain B</td><td>72%</td><td>65%</td><td>88%</td></tr>
                <tr><td>Chain C</td><td>92%</td><td>85%</td><td>55%</td></tr>
            </table>
        `
    },

    // --- PROCESS DIAGRAMS (4) ---
    {
        id: "pr1",
        type: "html",
        promptText: "The diagram below illustrates the process of manufacturing chocolate. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe flow chart illustrates the various stages involved in the commercial production of chocolate, from harvesting the raw ingredients to extracting the final components.\n\nBody Paragraph 1:\nThe process begins on the farm, where mature cocoa pods are harvested from trees. Following this, the beans are extracted from the pods and allowed to ferment over a period of two to eight days. Once fermentation is complete, the beans are spread out and dried naturally in the sun.\n\nBody Paragraph 2:\nAfter drying, the beans are transported to a factory where the more industrial stages begin. First, they are roasted at high temperatures, typically between 120°C and 150°C. Subsequently, the roasted beans undergo a crushing process, during which the outer shell is removed to extract the inner part, known as the nib. In the final step of the process, these nibs are mechanically pressed, separating the product into two distinct elements: cocoa liquor and cocoa butter.\n\nOverview:\nOverall, the manufacturing process consists of six main stages, beginning with the collection of cocoa pods from trees and culminating in the separation of the beans into cocoa liquor and cocoa butter.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, the manufacturing process consists of six main stages, beginning with the collection of cocoa pods from trees and culminating in the separation of the beans into cocoa liquor and cocoa butter.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: The process begins on the farm, where mature cocoa pods are harvested from trees.\n  - Body 2 Focus: After drying, the beans are transported to a factory where the more industrial stages begin.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        htmlContent: `
            <div style="display:flex; flex-direction:column; gap:10px; align-items:center;">
                <h3>Chocolate Manufacturing Process</h3>
                <div style="border:2px solid #64748b; padding:10px; border-radius:5px; width:80%; text-align:center;">1. Cocoa pods harvested from trees</div>
                <div>↓</div>
                <div style="border:2px solid #64748b; padding:10px; border-radius:5px; width:80%; text-align:center;">2. Beans extracted and fermented (2-8 days)</div>
                <div>↓</div>
                <div style="border:2px solid #64748b; padding:10px; border-radius:5px; width:80%; text-align:center;">3. Beans dried in the sun</div>
                <div>↓</div>
                <div style="border:2px solid #64748b; padding:10px; border-radius:5px; width:80%; text-align:center;">4. Roasted in factory (120°C - 150°C)</div>
                <div>↓</div>
                <div style="border:2px solid #64748b; padding:10px; border-radius:5px; width:80%; text-align:center;">5. Crushed & outer shell removed (nib extraction)</div>
                <div>↓</div>
                <div style="border:2px solid #64748b; padding:10px; border-radius:5px; width:80%; text-align:center;">6. Pressed to separate Cocoa Liquor and Cocoa Butter</div>
            </div>
        `
    },
    {
        id: "pr2",
        type: "html",
        promptText: "The diagram below shows the life cycle of a honey bee. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe diagram illustrates the natural life cycle of a honey bee, which spans approximately 21 days from egg to adult.\n\nBody Paragraph 1:\nThe initial stage begins when a queen bee lays an egg in a honeycomb cell. This egg stage is relatively brief, lasting for three days. Following this, the egg hatches into a larva. During this second phase, which occurs between days 4 and 9, the larva is entirely dependent on adult worker bees who continuously feed it to ensure rapid growth.\n\nBody Paragraph 2:\nAs the larva matures, the cycle enters its third stage (days 10-20). The honeycomb cell is capped with wax by worker bees, and inside, the larva transforms into a pupa, developing recognizable physical features. Finally, on approximately the 21st day, the metamorphosis is complete. The fully developed adult bee breaks through the wax cap and emerges from the cell, ready to assume its role within the hive and eventually contribute to a new generation.\n\nOverview:\nOverall, the life cycle consists of four distinct developmental stages: egg, larva, pupa, and finally, adult bee. The process is cyclical, beginning with the queen laying eggs and concluding with the emergence of a fully mature insect capable of continuing the cycle.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, the life cycle consists of four distinct developmental stages: egg, larva, pupa, and finally, adult bee.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: The initial stage begins when a queen bee lays an egg in a honeycomb cell.\n  - Body 2 Focus: As the larva matures, the cycle enters its third stage (days 10-20).\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        htmlContent: `
            <div style="display:flex; flex-direction:column; gap:10px; align-items:center;">
                <h3>Life Cycle of a Honey Bee (Approx. 21 Days)</h3>
                <div style="border:2px solid #f59e0b; padding:10px; border-radius:20px; width:70%; text-align:center;">Stage 1: Egg laid by Queen (Days 1-3)</div>
                <div>↻</div>
                <div style="border:2px solid #f59e0b; padding:10px; border-radius:20px; width:70%; text-align:center;">Stage 2: Larva hatches, fed by workers (Days 4-9)</div>
                <div>↻</div>
                <div style="border:2px solid #f59e0b; padding:10px; border-radius:20px; width:70%; text-align:center;">Stage 3: Cell capped, Pupa develops (Days 10-20)</div>
                <div>↻</div>
                <div style="border:2px solid #f59e0b; padding:10px; border-radius:20px; width:70%; text-align:center;">Stage 4: Adult bee emerges (Day 21)</div>
            </div>
        `
    },
    {
        id: "pr3",
        type: "html",
        promptText: "The diagram details the process of recycling plastic bottles. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe diagram illustrates the various stages involved in the process of recycling plastic bottles.\n\nBody Paragraph 1:\nInitially, the process begins when consumers throw their used plastic bottles into designated recycling bins. These bins are subsequently emptied by garbage collection trucks, which transport the waste to a recycling center. Upon arrival, the collected bottles undergo a rigorous sorting process where workers manually separate them based on their material and color, removing any non-recyclable items.\n\nBody Paragraph 2:\nFollowing the sorting stage, the plastic bottles are heavily compressed into large blocks to save space. These blocks are then fed into a crushing machine, which grinds the plastic into small flakes. These flakes are thoroughly washed in water to remove impurities and labels. Once cleaned, the flakes are fed through a machine that heats and melts them, extruding the molten plastic to form small pellets. Finally, these plastic pellets are used as raw material to manufacture a variety of new products, such as clothing, pens, or new bottles.\n\nOverview:\nOverall, the recycling process is a cyclical procedure consisting of nine main steps, beginning with the consumer disposing of the bottle and culminating in the creation of new end products.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, the recycling process is a cyclical procedure consisting of nine main steps, beginning with the consumer disposing of the bottle and culminating in the creation of new end products.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: Initially, the process begins when consumers throw their used plastic bottles into designated recycling bins.\n  - Body 2 Focus: Following the sorting stage, the plastic bottles are heavily compressed into large blocks to save space.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        htmlContent: `
            <div style="display:flex; flex-direction:column; gap:10px; align-items:center;">
                <h3>Plastic Bottle Recycling</h3>
                <div style="display:flex; gap:20px; width:100%;">
                    <div style="flex:1; border:1px solid #ccc; padding:10px; text-align:center;">1. Collection via bins/trucks</div>
                    <div style="flex:1; border:1px solid #ccc; padding:10px; text-align:center;">2. Sorting at facility</div>
                </div>
                <div>↓</div>
                <div style="border:1px solid #ccc; padding:10px; text-align:center; width:80%;">3. Washing & shredding into flakes</div>
                <div>↓</div>
                <div style="border:1px solid #ccc; padding:10px; text-align:center; width:80%;">4. Melting and forming into pellets</div>
                <div>↓</div>
                <div style="display:flex; gap:20px; width:100%;">
                    <div style="flex:1; border:1px solid #ccc; padding:10px; text-align:center;">5a. New Bottles</div>
                    <div style="flex:1; border:1px solid #ccc; padding:10px; text-align:center;">5b. Clothing/Fibers</div>
                </div>
            </div>
        `
    },
    {
        id: "pr4",
        type: "html",
        promptText: "The diagram illustrates how electricity is generated in a hydroelectric power station. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe flow chart provides a step-by-step breakdown of the recruitment process typically utilized by a modern company.\n\nBody Paragraph 1:\nThe process commences when a department identifies a vacancy and subsequently writes a detailed job description. This description is then used to advertise the position on various platforms, such as the company website and job boards. Following the advertisement, the company receives and collects applications and resumes from interested candidates. The Human Resources department then screens these applications, shortlisting the most suitable individuals based on their qualifications.\n\nBody Paragraph 2:\nThe shortlisted candidates are subsequently invited to attend a primary interview. Based on the performance in this initial round, a smaller group is selected for a second, more rigorous interview or a practical skills test. After evaluating the final candidates, the hiring committee selects the best applicant and extends a formal job offer. If the candidate accepts the offer, the final stage is the onboarding process, where the new employee is officially integrated into the company.\n\nOverview:\nOverall, the hiring procedure is a sequential, multi-stage process involving nine distinct steps. It begins with the identification of a staffing need and concludes with the formal onboarding of the successful candidate.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, the hiring procedure is a sequential, multi-stage process involving nine distinct steps.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: The process commences when a department identifies a vacancy and subsequently writes a detailed job description.\n  - Body 2 Focus: The shortlisted candidates are subsequently invited to attend a primary interview.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        htmlContent: `
            <div style="display:flex; flex-direction:column; gap:10px; align-items:center;">
                <h3>Hydroelectric Power Generation</h3>
                <div style="background:#bae6fd; border:1px solid #0284c7; padding:10px; width:80%; text-align:center;">Reservoir (High Water Level)</div>
                <div>↓ (Water flows down through intake)</div>
                <div style="border:2px dashed #64748b; padding:10px; width:60%; text-align:center;">Turbine spins due to water pressure</div>
                <div>↓ (Mechanical energy)</div>
                <div style="background:#fef08a; border:1px solid #ca8a04; padding:10px; width:60%; text-align:center;">Generator produces electricity</div>
                <div>↓</div>
                <div style="border:1px solid #334155; padding:10px; width:80%; text-align:center;">National Grid (Distribution)</div>
            </div>
        `
    },

    // --- MAPS (3) ---
    {
        id: "m1",
        type: "html",
        promptText: "The maps below show a beachfront area in 1990 and how it looks today. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe two maps illustrate the extensive redevelopment of a beachfront area, comparing its layout in 1990 with its present-day configuration.\n\nBody Paragraph 1:\nIn 1990, the area was largely natural and untouched. The coastline was a simple stretch of sea meeting an empty sandy beach. Inland from the sand, the terrain was covered in trees, and access to the area was provided by a small, narrow dirt road running horizontally behind the vegetation.\n\nBody Paragraph 2:\nToday, the landscape has been entirely modernized. The natural sand and tree cover have been completely removed. In their place, a large hotel complex has been constructed on the left side, accompanied by a dedicated car park on the right. The small dirt track has been upgraded into a wide, main asphalt road capable of handling heavier traffic. Furthermore, the development extends into the water itself, with the addition of a pier jutting out into the sea directly from the shoreline, likely to facilitate tourism and leisure activities.\n\nOverview:\nOverall, the maps reveal a dramatic transformation from a predominantly natural, undeveloped coastal strip into a highly commercialized tourist destination. This shift is characterized by the replacement of natural vegetation with substantial infrastructure, including a hotel and a pier.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, the maps reveal a dramatic transformation from a predominantly natural, undeveloped coastal strip into a highly commercialized tourist destination.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: In 1990, the area was largely natural and untouched.\n  - Body 2 Focus: Today, the landscape has been entirely modernized.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        htmlContent: `
            <div style="display:flex; gap:20px; flex-wrap:wrap;">
                <div style="flex:1; min-width:200px; border:1px solid #ccc; padding:10px;">
                    <h4 style="text-align:center">1990</h4>
                    <div style="height:150px; background:#e0f2fe; margin-bottom:10px; display:flex; align-items:center; justify-content:center;">Sea</div>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:5px;">
                        <div style="background:#dcfce7; padding:5px; text-align:center;">Trees</div>
                        <div style="background:#fef08a; padding:5px; text-align:center;">Sand / Empty</div>
                        <div style="background:#f1f5f9; padding:5px; text-align:center; grid-column:span 2;">Small dirt road</div>
                    </div>
                </div>
                <div style="flex:1; min-width:200px; border:1px solid #ccc; padding:10px;">
                    <h4 style="text-align:center">Today</h4>
                    <div style="height:150px; background:#e0f2fe; margin-bottom:10px; display:flex; align-items:center; justify-content:center;">Sea (with Pier)</div>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:5px;">
                        <div style="background:#fca5a5; padding:5px; text-align:center;">Hotel Complex</div>
                        <div style="background:#cbd5e1; padding:5px; text-align:center;">Car Park</div>
                        <div style="background:#334155; color:white; padding:5px; text-align:center; grid-column:span 2;">Main Asphalt Road</div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "m2",
        type: "html",
        promptText: "The plans below show the layout of a university campus in 2005 and the proposed changes for 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe two maps compare the layout of a university campus as it stood in 2005 with a proposed plan for its redevelopment by 2025.\n\nBody Paragraph 1:\nIn 2005, the campus was organized around a central green space. To the north lay a small library, flanked by a Science Block to the west and an Arts Block to the east. The southern end of the campus was entirely dedicated to a car park, providing vehicle access for students and staff.\n\nBody Paragraph 2:\nThe 2025 proposal details several major structural changes. While the Arts Block remains untouched on the eastern side, the northern and western facilities are slated for massive expansion. The library will be significantly enlarged and will also incorporate a new IT Center. Similarly, the western Science Block will be extended to include new laboratories. To accommodate these larger buildings, the central green space will be noticeably reduced in size. Finally, the most dramatic change occurs in the south, where the existing car park will be completely demolished and replaced with new student housing, reflecting a shift towards a more residential campus model.\n\nOverview:\nOverall, the proposed changes indicate a significant expansion of academic and residential facilities at the expense of green spaces and parking. The campus will transition from a relatively spread-out, balanced layout to a more densely built educational environment.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, the proposed changes indicate a significant expansion of academic and residential facilities at the expense of green spaces and parking.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: In 2005, the campus was organized around a central green space.\n  - Body 2 Focus: The 2025 proposal details several major structural changes.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        htmlContent: `
            <div style="display:flex; gap:20px; flex-wrap:wrap;">
                <div style="flex:1; min-width:200px; border:1px solid #ccc; padding:10px;">
                    <h4 style="text-align:center">2005</h4>
                    <ul style="list-style:none; padding:0; line-height:2;">
                        <li>[North] Library (Small)</li>
                        <li>[Center] Green Space</li>
                        <li>[West] Science Block</li>
                        <li>[East] Arts Block</li>
                        <li>[South] Car Park</li>
                    </ul>
                </div>
                <div style="flex:1; min-width:200px; border:1px solid #ccc; padding:10px;">
                    <h4 style="text-align:center">Proposed 2025</h4>
                    <ul style="list-style:none; padding:0; line-height:2;">
                        <li>[North] Library (Expanded, +IT Center)</li>
                        <li>[Center] Green Space (Reduced)</li>
                        <li>[West] Science Block & New Labs</li>
                        <li>[East] Arts Block</li>
                        <li>[South] Student Housing (Car Park removed)</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: "m3",
        type: "html",
        promptText: "The maps show a town center in 2010 and how it was redeveloped by 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe two maps illustrate the extensive redevelopment that took place in a town center between the years 2010 and 2020.\n\nBody Paragraph 1:\nIn 2010, the layout of the town center was relatively simple. A main street, which permitted cars, ran horizontally across the area. Situated directly below this road were two commercial buildings of equal size: a Post Office on the left and a Supermarket on the right.\n\nBody Paragraph 2:\nBy 2020, significant alterations had been made. The most notable change was the conversion of the main street into a designated Pedestrian Zone, completely banning vehicular traffic. Furthermore, the buildings underwent major changes. The Post Office was entirely demolished and replaced by a Cafe and Restaurants, reflecting a shift towards leisure. Meanwhile, the Supermarket on the right was significantly expanded, taking up more space than it did a decade earlier.\n\nOverview:\nOverall, the town center was transformed from a vehicle-oriented commercial area into a more pedestrian-friendly and leisure-focused zone, highlighted by the complete removal of road traffic and the addition of dining facilities.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, the town center was transformed from a vehicle-oriented commercial area into a more pedestrian-friendly and leisure-focused zone, highlighted by the complete removal of road traffic and the addition of dining facilities.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: In 2010, the layout of the town center was relatively simple.\n  - Body 2 Focus: By 2020, significant alterations had been made.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        htmlContent: `
            <div style="display:flex; gap:20px; flex-wrap:wrap;">
                <div style="flex:1; min-width:200px; border:1px solid #ccc; padding:10px;">
                    <h4 style="text-align:center">2010</h4>
                    <div style="padding:10px; border-bottom:2px dashed #999;">Main Street (Cars allowed)</div>
                    <div style="display:flex; gap:10px; margin-top:10px;">
                        <div style="flex:1; border:1px solid #333; padding:5px;">Post Office</div>
                        <div style="flex:1; border:1px solid #333; padding:5px;">Supermarket</div>
                    </div>
                </div>
                <div style="flex:1; min-width:200px; border:1px solid #ccc; padding:10px;">
                    <h4 style="text-align:center">2020</h4>
                    <div style="padding:10px; border-bottom:2px solid #22c55e; background:#dcfce7;">Pedestrian Zone (No cars)</div>
                    <div style="display:flex; gap:10px; margin-top:10px;">
                        <div style="flex:1; border:1px solid #333; padding:5px;">Cafe / Restaurants</div>
                        <div style="flex:1; border:1px solid #333; padding:5px;">Supermarket (Expanded)</div>
                    </div>
                </div>
            </div>
        `
    },

    // --- MIXED CHARTS (2) ---
    {
        id: "mx1",
        type: "bar",
        promptText: "The bar chart below shows the number of students enrolled in different courses, and the line graph shows the percentage of female students in each course. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe charts provide information regarding student enrollment across four different university courses, along with the proportion of female students within each discipline.\n\nBody Paragraph 1:\nLooking at total enrollment, Engineering has the highest number of students, with 1,200 individuals taking the course. Business follows closely behind with 1,100 students. In contrast, Science and Arts have lower overall attendance, recording 950 and 800 students, respectively.\n\nBody Paragraph 2:\nDespite having the highest total enrollment, Engineering has the lowest proportion of female students, at just 25%. Conversely, Arts, which has the fewest students overall, boasts the highest female participation rate at 65%. For the remaining two courses, the gender split is more balanced; females make up exactly half (50%) of the Business students and slightly less than half (45%) of those studying Science.\n\nOverview:\nOverall, Engineering and Business are the most popular courses in terms of total student numbers, whereas Arts and Science attract fewer students. However, the gender distribution varies significantly, with Arts having the highest percentage of females and Engineering having the lowest.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, Engineering and Business are the most popular courses in terms of total student numbers, whereas Arts and Science attract fewer students.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: Looking at total enrollment, Engineering has the highest number of students, with 1,200 individuals taking the course.\n  - Body 2 Focus: Despite having the highest total enrollment, Engineering has the lowest proportion of female students, at just 25%.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'bar',
            data: {
                labels: ['Engineering', 'Arts', 'Science', 'Business'],
                datasets: [
                    { type: 'bar', label: 'Total Students', data: [1200, 800, 950, 1100], backgroundColor: '#3b82f6', yAxisID: 'y' },
                    { type: 'line', label: 'Female (%)', data: [25, 65, 45, 50], borderColor: '#ef4444', tension: 0.1, yAxisID: 'y1' }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Enrollment and Gender Distribution' } },
                scales: {
                    y: { type: 'linear', display: true, position: 'left', title: {display: true, text:'Total Students'} },
                    y1: { type: 'linear', display: true, position: 'right', grid: { drawOnChartArea: false }, min: 0, max: 100, title: {display: true, text:'Female %'} }
                }
            }
        }
    },
    {
        id: "mx2",
        type: "bar",
        promptText: "The charts show the reasons why people stopped using a specific fitness app (bar chart) and their age distribution (pie chart, represented as secondary data). Summarise the information by selecting and reporting the main features. Write at least 150 words.",
        modelAnswer: "Introduction:\nThe pie chart illustrates the primary causes of land degradation globally, while the table details how these causes affected three distinct regions (North America, Europe, and Oceania) during the 1990s.\n\nBody Paragraph 1:\nAccording to the pie chart, over-grazing was responsible for the largest share of global land degradation at 35%. Deforestation was the second most significant factor (30%), closely followed by over-cultivation (28%). Other minor causes accounted for the remaining 7%.\n\nBody Paragraph 2:\nThe table reveals distinct regional variations. Europe had the highest proportion of degraded land at 23%, with deforestation being the main culprit, responsible for 9.8% of this damage. Oceania (Australia and New Zealand) had the second-highest total degradation at 13%. Unlike Europe, Oceania's land was overwhelmingly damaged by over-grazing (11.3%), while over-cultivation had absolutely zero impact in this region. Finally, North America had the lowest overall land degradation at just 5%, with over-cultivation (3.3%) being the most prominent cause, while deforestation and over-grazing played minimal roles.\n\nOverview:\nOverall, over-grazing was the leading global cause of land degradation. Regionally, Europe suffered the highest total percentage of degraded land, primarily due to deforestation, whereas North America experienced the least degradation.\n\nHow to Plan Your Answer:\n• Step 1: Understand the Visual: Quickly identify what the chart/graph represents (units, timeframes, categories).\n• Step 2: Identify the Overview: Find the 1-2 most obvious overall trends. (e.g., \"Overall, over-grazing was the leading global cause of land degradation.\")\n• Step 3: Group the Data: Decide how to split the details into two logical body paragraphs.\n  - Body 1 Focus: According to the pie chart, over-grazing was responsible for the largest share of global land degradation at 35%.\n  - Body 2 Focus: The table reveals distinct regional variations.\n• Step 4: Select Key Features: You don't need to mention every number. Pick only the most significant highs, lows, and comparisons.",
        chartConfig: {
            type: 'bar',
            data: {
                labels: ['Too Expensive', 'Hard to Use', 'Boring', 'Found Alternative'],
                datasets: [
                    { label: 'Reason (%)', data: [40, 25, 20, 15], backgroundColor: '#8b5cf6' }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Reasons for abandoning the app' } }
            }
        }
    }
];
