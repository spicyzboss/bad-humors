import { onMount, createSignal, For } from "solid-js"
import type { Component } from "solid-js"
import Column from "@components/Column";
import Block from "@components/Block";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import type { Dayjs } from 'dayjs'
import { initialDate } from '@helper/initialDate';
import type { BlockColor, Humor } from 'types/main'
import TextBadge from "@components/TextBadge";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(dayOfYear);
dayjs.extend(isLeapYear);

const HomePage: Component = () => {
  const [date, setDate] = createSignal<Dayjs>(dayjs().tz('Asia/Bangkok'));
  const [days, setDays] = createSignal<Humor[]>([]);

  const dayArray = ['bg-red-400', 'bg-yellow-400', 'bg-pink-400', 'bg-green-400', 'bg-orange-400', 'bg-sky-400', 'bg-indigo-400'];
  const [dayColor, setDayColor] = createSignal<string>(dayArray[dayjs().tz('Asia/Bangkok').day()]);

  onMount(() => {
    document.title = 'Bad Humors';
    setDays(initialDate(date().isLeapYear() ? 366 : 365));
  });

  const convertDateToString = () => {
    setDate(dayjs().tz('Asia/Bangkok'));
    setDayColor(dayArray[date().day()])
  }

  setInterval(() => {
    convertDateToString();
  }, 1000);

  return (
    <>
      <div class="h-screen w-screen xl:flex flex-col justify-center items-center gap-8 hidden max-w-7xl mx-auto">
        <p class="text-6xl select-none font-bold bg-gradient-to-br from-sky-400 to-indigo-400 bg-clip-text text-transparent mb-4"><span class={ `py-2 px-4 ${dayColor()} rounded-2xl text-white` }>Bad</span> Humors</p>
        <div class="flex justify-between w-full select-none">
          <TextBadge backgroundColor={dayColor()}>{ date().format('dddd DD/MM/YYYY') }</TextBadge>
          <TextBadge backgroundColor={dayColor()}>{ date().format('HH:mm:ss') }</TextBadge>
        </div>
        <Column>
          <For each={days()}>
            {
              (v, i) => {
                let color: BlockColor = "gray";
                if (!v) {
                  if (i() === date().dayOfYear() - 1) {
                    color = 'yellow';
                  }
                } else {
                  color = v.color;
                }

                return <Block color={color} />
              }
            }
          </For>
        </Column>
        <p>- Description -</p>
      </div>
      <div class="xl:hidden h-screen w-screen justify-center items-center gap-4 flex">
        <p>Please use bigger screen to display this website.</p>
      </div>
    </>
  )
};

export default HomePage;
