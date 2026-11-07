---
title: 'Qué significa un hash en informática forense'
description: 'Qué aporta una huella criptográfica al análisis de archivos y cuáles son sus límites como evidencia.'
date: 2026-11-07
locale: es
tags:
  - Informática forense
  - SHA-256
  - Evidencia digital
draft: false
---

Un hash es una huella calculada a partir de datos digitales mediante una función matemática. En informática forense se utiliza, entre otros fines, para comparar archivos o imágenes y detectar si su contenido cambió entre dos mediciones.

## Cómo funciona

Una función hash recibe datos de cualquier tamaño y produce una salida de longitud fija. SHA-256, por ejemplo, genera un valor de 256 bits que suele representarse con 64 caracteres hexadecimales.

Si cambia un solo bit del contenido, el resultado normalmente será diferente. Por eso, al calcular el hash de una imagen al recibirla y volver a calcularlo después de copiarla, los valores iguales son una señal útil de que los datos comparados coinciden.

```text
Archivo o imagen → función hash → valor de verificación
```

## Qué puede respaldar

Un registro de hash bien documentado puede ayudar a:

- Comparar dos copias de un mismo archivo.
- Comprobar que una imagen de trabajo coincide con la imagen registrada previamente.
- Detectar cambios en una colección de archivos entre dos momentos de medición.
- Facilitar la revisión independiente de un procedimiento documentado.

Para que esa comparación sea interpretable, registra qué objeto se midió, cuándo, con qué herramienta y en qué contexto. También conserva los valores originales y el procedimiento que los relaciona.

## Qué no demuestra por sí solo

Un hash coincidente no demuestra que el contenido sea auténtico, quién lo creó, cuándo se generó o si fue obtenido con autorización. Tampoco reconstruye una cadena de custodia ni explica el significado de los datos.

El resultado únicamente permite comparar las entradas efectivamente procesadas. Si se calcula el hash de un archivo distinto, una exportación incompleta o una copia obtenida después de una alteración, el valor no corrige ese problema.

> Un hash aporta evidencia de integridad entre mediciones; su alcance depende de cómo se obtuvo y documentó cada medición.

## Buenas prácticas de registro

En un informe, evita incluir un valor aislado sin contexto. Describe el objeto analizado, su identificador, la fecha y hora con zona horaria, la herramienta y versión, el algoritmo empleado y el resultado. Explica también cualquier error, incompatibilidad o limitación detectada.

Cuando existan varios archivos, define de forma clara si cada valor corresponde a un archivo individual, a una imagen completa o a otro contenedor. No intercambies esos conceptos: el objeto al que se aplica el cálculo forma parte del resultado.

## Conclusión

SHA-256 puede ser una herramienta útil para verificar que los datos comparados mantienen el mismo contenido. No reemplaza la autorización, la documentación, la trazabilidad ni el análisis del contexto. Una conclusión técnica debe explicar qué se comparó y limitarse a lo que ese procedimiento permite afirmar.
