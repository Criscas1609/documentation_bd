import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cassandra',
    Svg: require('@site/static/img/cassandra.svg').default,
    description: (
      <>
        Cassandra es un sistema de gestión de bases de datos NoSQL distribuido y altamente escalable, diseñado para manejar grandes cantidades de datos en varios servidores sin un único punto de fallo. Fue desarrollado por Facebook y luego liberado como proyecto de código abierto. Actualmente, está mantenido por la Apache Software Foundation.
      </>
    ),
  },
  {
    title: 'Redis',
    Svg: require('@site/static/img/redis.svg').default,
    description: (
      <>
        Redis es una base de datos en memoria que se destaca por su velocidad y capacidad para manejar estructuras de datos complejas. Funciona principalmente como un almacén de estructuras de datos clave-valor y es ampliamente utilizado para caché, colas de mensajes y almacenamiento en tiempo real. Su diseño simple y rápido lo hace adecuado para casos de uso que requieren un rendimiento excepcional.
      </>
    ),
  },
  {
    title: 'Mongo',
    Svg: require('@site/static/img/mongodb.svg').default,
    description: (
      <>
        MongoDB es un sistema de gestión de bases de datos NoSQL que se destaca por su flexibilidad y escalabilidad. Utiliza un modelo de datos de documentos JSON, lo que permite almacenar y recuperar datos de manera eficiente. MongoDB es ideal para aplicaciones que requieren un manejo ágil y dinámico de datos, como aquellas en entornos de desarrollo ágil y rápido.
      </>
    ),
  },
  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
