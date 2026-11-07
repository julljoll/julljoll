---
title: 'Preservación de evidencia digital: primeros criterios'
description: 'Una introducción práctica a la documentación, integridad y límites al preservar evidencia digital.'
date: 2026-11-07
locale: es
tags:
  - Informática forense
  - Evidencia digital
  - Buenas prácticas
draft: false
---

La evidencia digital puede ser relevante para una investigación, una auditoría o un proceso judicial. Su valor no depende únicamente de lo que muestra: también importa cómo se obtuvo, quién la manejó y qué medidas se tomaron para conservarla.

Esta guía presenta criterios generales de preservación. No sustituye los procedimientos de la organización, las instrucciones de la autoridad competente ni la normativa aplicable al caso.

## Antes de intervenir

Evita explorar, modificar o compartir el dispositivo o los archivos sin autorización. Si el equipo está encendido, conectado a una red o ejecutando procesos, apagarlo o manipularlo podría alterar información volátil; la decisión debe tomarla personal competente según el contexto.

Como primer paso, registra lo que observas sin inferir más de lo que puedes confirmar:

- Fecha, hora y zona horaria del registro.
- Lugar y condiciones en que se encontró el elemento.
- Estado visible del dispositivo y conexiones relevantes.
- Persona que lo localizó y quienes estuvieron presentes.

## Documentación y trazabilidad

Cada transferencia o acceso debe quedar asentado de forma cronológica. Un registro claro ayuda a reconstruir el manejo del elemento y a identificar quién tuvo acceso a él.

Incluye, cuando corresponda, el identificador asignado, la persona que entrega y recibe, la fecha y hora, el motivo del traslado y las condiciones del embalaje o almacenamiento. Si se detecta una incidencia, documenta el hecho y las medidas adoptadas; no alteres registros anteriores para ocultarla.

> Una descripción precisa de las acciones realizadas es más útil que una afirmación general de que la evidencia se mantuvo “intacta”.

## Copias de trabajo e integridad

Cuando el procedimiento autorizado lo permita, conserva el original bajo controles adecuados y realiza el análisis sobre una copia forense. Documenta las herramientas y versiones utilizadas, la configuración relevante y cualquier limitación del proceso.

Una función hash, como SHA-256, puede ayudar a comparar el contenido de dos archivos o imágenes en momentos distintos. Registra el valor, el objeto al que corresponde, el momento del cálculo y la herramienta utilizada. Un hash coincidente respalda que los datos comparados no cambiaron entre esas mediciones, pero por sí solo no demuestra quién creó el archivo, cuándo se creó ni que su contenido sea verdadero.

## Límites que deben explicarse

La preservación reduce el riesgo de alteraciones no documentadas, pero no resuelve todas las preguntas del caso. Pueden existir datos cifrados, dañados, incompletos o fuera del alcance autorizado.

El informe debe distinguir entre hechos observados, procedimientos aplicados, resultados y limitaciones. Evita presentar una hipótesis como conclusión técnica si los datos disponibles no permiten sostenerla.

## Lista de control inicial

1. Confirma la autorización y el alcance antes de intervenir.
2. Registra el estado inicial con datos verificables.
3. Mantén trazabilidad de accesos, traslados y almacenamiento.
4. Documenta las herramientas y acciones realizadas.
5. Expón las limitaciones y conserva los registros originales.

La preservación es un proceso documentado, no una etiqueta. La claridad sobre cada paso ayuda a que otras personas puedan revisar el trabajo y comprender qué puede —y qué no puede— concluirse de la evidencia.
