{\rtf1\ansi\ansicpg1252\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw16840\paperh23820\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function updateWidget() \{\
    const now = new Date();\
    const hours = now.getHours();\
    const greeting = hours < 12 ? 'Good Morning,' : hours < 18 ? 'Good Afternoon,' : 'Good Evening,';\
    document.getElementById('greeting').textContent = greeting;\
    document.getElementById('time').textContent = now.toLocaleTimeString('en-US', \{ hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true \});\
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', \{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' \});\
\}\
\
// Update the widget every second\
setInterval(updateWidget, 1000);\
updateWidget(); // Also update immediately on load\
}