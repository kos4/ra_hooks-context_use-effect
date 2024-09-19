import {useEffect, useState} from "react";

export default function Details({info}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      try {
        const res = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`);

        if (!res.ok) throw new Error(res.statusText);

        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (info) {
      getUser(info.id);
    }
  }, [info]);

  if (data) {
    console.log(loading);

    const src = `${data.avatar}?u=${data.id}`;

    return (
      <div className="user">
        <img src={src} alt={data.name} className="user__photo"/>
        <div className="user__name">{data.name}</div>
        <div className="user__city">{data.details.city}</div>
        <div className="user__company">{data.details.company}</div>
        <div className="user__position">{data.details.position}</div>
      </div>
    );
  } else {
    return '';
  }

}
