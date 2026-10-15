window.PROJECTS = [
{
    "id": "swarf",
    "title": {
      "en": "2026 - Swarf (Machining Simulation Engine)",
      "es": "2026 - Swarf (Motor de Simulación de Mecanizado)"
    },
    "status": {
      "kind": "dev",
      "label": { "en": "Active Development", "es": "En desarrollo activo" }
    },
    "stack": "C++20 • CMake • OpenGL • WebAssembly",
"media": [
      {
        "youtube": "https://www.youtube.com/watch?v=9bPPSVzo4mA",
        "title": {
          "en": "Swarf: CNC Machine Simulator — Technical Demo",
          "es": "Swarf: simulador de mecanizado CNC — demo técnica"
        },
        "caption": {
          "en": "Technical demo of the machining simulation engine in action",
          "es": "Demo técnica del motor de simulación de mecanizado en acción"
        }
      },
      {
        "src": "assets/img/projects/swf-carve.png",
        "width": 1280,
        "height": 720,
        "alt": {
          "en": "Swarf running the machining simulation in the WebAssembly build",
          "es": "Swarf ejecutando la simulación de mecanizado en la build WebAssembly"
        },
        "caption": {
          "en": "Viewport of the stock model being carved by the toolpath",
          "es": "Viewport del modelo de stock siendo tallado por el recorrido de herramienta"
        }
      },
      {
        "src": "assets/img/projects/swf-openscad.png",
        "width": 1280,
        "height": 720,
        "alt": {
          "en": "A 3D flange model generated via OpenSCAD and imported into the Swarf simulation environment",
          "es": "Modelo 3D de una brida generada mediante OpenSCAD e importada en el entorno de simulación de Swarf"
        },
        "caption": {
          "en": "Complex boolean geometry in action: An OpenSCAD flange seamlessly imported into the workspace",
          "es": "Geometría booleana compleja en acción: Una brida de OpenSCAD importada nativamente al espacio de trabajo"
        }
      },
      {
        "src": "assets/img/projects/swf-material-editor.png",
        "width": 1280,
        "height": 720,
        "alt": {
          "en": "Swarf custom material editor interface displaying shader configuration and texture mapping",
          "es": "Interfaz del editor de materiales de Swarf mostrando la configuración de shaders y el mapeo de texturas"
        },
        "caption": {
          "en": "Integrated material editor for custom shading, precise UV mapping, and realistic surface representation",
          "es": "Editor de materiales integrado para personalización de shaders, mapeo UV preciso y representación realista de superficies"
        }
      },
      {
        "src": "assets/img/projects/swf-svg-export.svg",
        "width": 1280,
        "height": 720,
        "alt": {
          "en": "Automated 2D SVG blueprint exported directly from the built-in slicer in Swarf",
          "es": "Plano 2D en formato SVG exportado automáticamente desde el slicer integrado en Swarf"
        },
        "caption": {
          "en": "Automated documentation: High-precision SVG blueprints generated directly by the internal slicing engine",
          "es": "Documentación automatizada: Planos SVG de alta precisión generados directamente por el motor de slicing interno"
        }
      }
    ],
    "sections": [
      {
        "type": "text",
        "title": { "en": "The Vision & Use Case", "es": "La visión y el caso de uso" },
        "body": {
          "en": "Swarf is designed as an interactive educational tool for CNC operators in training. It does not aim to replace full CAM software, but rather to find the perfect sweet spot: a fluid, natural-rendering platform that allows students to safely experiment, validate code, and interact with the hardware logic before operating real machinery.",
          "es": "Swarf está diseñado como una herramienta educativa interactiva para la formación de operarios CNC. No busca reemplazar a un software CAM completo, sino encontrar el punto medio ideal: una plataforma fluida y de renderizado natural que permita a los estudiantes experimentar, validar código e interactuar con la lógica del hardware de forma segura antes de tocar la máquina real."
        }
      },
      {
        "type": "list",
        "title": { "en": "Native Engine Capabilities", "es": "Capacidades del motor nativo" },
        "items": [
          {
            "en": "Cross-Platform Architecture: Native execution across Linux, Windows, and Web environments, with an Android port currently on the roadmap.",
            "es": "Arquitectura multiplataforma: Ejecución nativa en Linux, Windows y entornos Web, con soporte para Android programado en la hoja de ruta."
          },
          {
            "en": "Advanced Parser & Kinematics: Multi-dialect GCode parser supporting system variables, macros, and math operations (with a custom C-like dialect in development). Currently driving a 5-axis CNC (3+2 configuration), scaling towards universal machine support.",
            "es": "Parser y cinemática avanzada: Parser GCode multidialecto con soporte para variables de sistema, macros y matemática (con un dialecto C-like propio en desarrollo). Actualmente simula un CNC de 5 ejes (configuración 3+2), escalando hacia soporte de máquinas universales."
          },
          {
            "en": "CAD/CAM Integration: Complex boolean operations with extensive OpenSCAD support, STL/OBJ I/O, and an integrated slicer for automated SVG blueprint generation.",
            "es": "Integración CAD/CAM: Operaciones booleanas complejas con soporte extenso para OpenSCAD, I/O de archivos STL/OBJ y un slicer integrado para exportación automática de planos SVG."
          },
          {
            "en": "Custom Shading & Assets: Fully integrated Tool and Material editors supporting 3D model loading, custom shaders, and precise UV mapping customization.",
            "es": "Shaders y assets personalizados: Editores integrados de Herramientas y Materiales, con soporte para carga de modelos 3D, shaders personalizados y mapeo UV."
          },
          {
            "en": "Simulation & Metrology: Built-in toolset including virtual calipers, dial indicators, surface roughness testers, and stamping tools. Enhanced with procedural audio and gamepad support for tactile operator immersion.",
            "es": "Simulación y metrología: Herramientas integradas incluyendo calibre, reloj comparador, rugosímetro y herramientas de estampado. Enriquecido con audio procedural y soporte para Gamepad para una inmersión táctil del operario."
          }
        ]
      },
      {
        "type": "text",
        "title": { "en": "About the Demo", "es": "Sobre la demo interactiva" },
        "body": {
          "en": "The WebAssembly build provided below is a technical proof of concept. It features a constrained toolset and limited capabilities compared to the full desktop engine outlined above, optimized strictly for safe and accessible browser execution.",
          "es": "La build en WebAssembly disponible a continuación es una prueba de concepto técnica. Presenta un conjunto de herramientas y capacidades limitadas en comparación con el motor de escritorio detallado anteriormente, optimizada estrictamente para su ejecución rápida y segura en el navegador."
        }
      },
{
        "type": "list",
        "title": { "en": "Technical Milestones & Open Source", "es": "Hitos Técnicos y Ecosistema" },
        "items": [
          {
            "en": "Sub-millimeter Volumetric Precision: Achieved a 0.25mm voxel resolution across a massive 400x400x300 mm workspace. This requires evaluating a theoretical grid of over 3 billion voxels, utilizing memory optimization for constrained SDF quantization to keep real-time performance viable.",
            "es": "Precisión Volumétrica Submilimétrica: Resolución de vóxel de 0.25mm en un área de trabajo de 400x400x300 mm. Esto implica gestionar una grilla teórica de más de 3 mil millones de vóxeles, utilizando optimización de memoria y cuantización de valores SDF para mantener un rendimiento en tiempo real."
          },
          {
            "en": "Custom Real-Time Pipeline: The architecture seamlessly connects a custom C++ GCode parser directly to the memory-optimized SDF engine and OpenGL renderer.",
            "es": "Pipeline custom en tiempo real: La arquitectura conecta directamente el parser C++ de GCode con el motor SDF optimizado en memoria y el renderizador OpenGL."
          },
          {
            "en": "Powered by Open Source: The engine's windowing context and immediate-mode UI are built on top of Raylib and Raygui, providing a lightweight, bloat-free foundation that respects the C++20 performance constraints.",
            "es": "Impulsado por Open Source: El contexto gráfico y la interfaz de usuario inmediata (IMGUI) están construidos sobre Raylib y Raygui, aportando una base ligera y libre de bloatware que respeta las restricciones de rendimiento de C++20."
          }
        ]
      }
    ],
    "links": [
      {
        "href": "swarf/",
        "variant": "primary",
        "target": "_blank",
        "label": { "en": "Try the WebAssembly Demo", "es": "Probar Demo WebAssembly" }
      }
    ]
  },
  {
    "id": "logistics",
    "title": {
      "en": "2026 - Internal Logistics & Inventory System",
      "es": "2026 - Sistema interno de logística e inventario"
    },
    "status": {
      "kind": "prod",
      "label": { "en": "In Production", "es": "En producción" }
    },
    "stack": "HTML • JavaScript • Firebase",
    "media": [
      {
        "src": "assets/img/projects/logistics-1.png",
        "width": 1280,
        "height": 720,
        "alt": {
          "en": "Internal logistics and inventory application screen",
          "es": "Pantalla de la aplicación interna de logística e inventario"
        },
        "caption": {
          "en": "Stock and inter-branch transfer view used by branch managers",
          "es": "Vista de stock y transferencias entre sucursales usada por los responsables"
        }
      }
    ],
    "sections": [
      {
        "type": "text",
        "title": { "en": "The Business Problem", "es": "El problema de negocio" },
        "body": {
          "en": "A hardware retail chain experienced consistent bottlenecks, stock discrepancies, and failed merchandise transfers between branches due to manual, error-prone tracking processes.",
          "es": "Una cadena de retail de ferretería sufría cuellos de botella constantes, diferencias de stock y transferencias fallidas entre sucursales por procesos de seguimiento manuales y propensos a errores."
        }
      },
      {
        "type": "list",
        "title": { "en": "Solution & Architecture", "es": "Solución y arquitectura" },
        "items": [
          {
            "en": "Architected a custom, full-stack logistics solution from the ground up to replace legacy processes.",
            "es": "Arquitecté desde cero una solución de logística full-stack a medida para reemplazar los procesos heredados."
          },
          {
            "en": "Implemented Role-Based Access Control (RBAC) to ensure security and proper delegation across different branch managers.",
            "es": "Implementé control de acceso basado en roles (RBAC) para garantizar seguridad y delegación correcta entre los responsables de cada sucursal."
          },
          {
            "en": "Built robust front-end data validation using JavaScript pattern matching to intercept duplicate requests before hitting the backend API.",
            "es": "Construí una validación de datos robusta en el front-end con pattern matching en JavaScript para interceptar solicitudes duplicadas antes de llegar a la API del backend."
          }
        ]
      },
      {
        "type": "kv",
        "title": { "en": "Production Impact", "es": "Impacto en producción" },
        "items": [
          {
            "label": { "en": "100% Uptime:", "es": "100% de disponibilidad:" },
            "text": {
              "en": "Successfully deployed and currently sustaining daily high-demand usage across all branches.",
              "es": "Desplegado con éxito y en uso diario de alta demanda en todas las sucursales."
            }
          },
          {
            "label": { "en": "Zero Discrepancies:", "es": "Cero discrepancias:" },
            "text": {
              "en": "Completely eliminated failed merchandise transfers and transit data losses.",
              "es": "Eliminó por completo las transferencias fallidas y las pérdidas de datos en tránsito."
            }
          }
        ]
      }
    ],
    "links": []
  },
  {
    "id": "pagadios",
    "title": {
      "en": "Pagadios (Real-Time Shared Expense Tracker)",
      "es": "Pagadios (Gestor de Gastos Compartidos)"
    },
    "status": {
      "kind": "prod",
      "label": { "en": "Deployed PWA", "es": "PWA Desplegada" }
    },
    "stack": "JavaScript • PWA • Firebase Firestore • Google OAuth 2.0",
    "media": [
      {
        "src": "assets/img/projects/PD1.png",
        "width": 1280,
        "height": 720,
        "alt": {
          "en": "Pagadios main dashboard showing real-time balances and active participants",
          "es": "Panel principal de Pagadios mostrando balances en tiempo real y participantes activos"
        },
        "caption": {
          "en": "Main dashboard: Real-time synchronization of shared expenses and user balances",
          "es": "Panel principal: Sincronización en tiempo real de gastos compartidos y balances"
        }
      },
      {
        "src": "assets/img/projects/PD2.png",
        "width": 1280,
        "height": 720,
        "alt": {
          "en": "Gamification screen showing the 'Scam' mechanic and user trophies",
          "es": "Pantalla de gamificación mostrando la mecánica de 'Estafa' y los trofeos de usuario"
        },
        "caption": {
          "en": "Engagement mechanics: Dynamic trophy system and debt-forgiveness requests",
          "es": "Mecánicas de interacción: Sistema dinámico de trofeos y solicitudes de perdón de deudas"
        }
      }
    ],
    "sections": [
      {
        "type": "text",
        "title": { "en": "The Vision & Use Case", "es": "La visión y el caso de uso" },
        "body": {
          "en": "Born from a personal need to track daily shared expenses without friction, Pagadios prevents informal debts from being forgotten or double-charged. What started as a tool for two has scaled into a multi-user platform for managing group finances, focusing on instant synchronization and a frictionless user experience.",
          "es": "Nacido de la necesidad personal de registrar gastos diarios compartidos sin fricción, Pagadios evita que las deudas informales se olviden o se cobren dos veces. Lo que comenzó como una herramienta para dos personas escaló a una plataforma multiusuario para gestionar finanzas grupales, centrada en la sincronización instantánea y una experiencia de usuario fluida."
        }
      },
      {
        "type": "list",
        "title": { "en": "Architecture & Engineering", "es": "Arquitectura e Ingeniería" },
        "items": [
          {
            "en": "Real-Time Sync & BaaS: Built as a Progressive Web App (PWA) using vanilla HTML/JS and Firebase Firestore. It leverages real-time snapshot listeners to instantly calculate and update participant balances across all active devices.",
            "es": "Sincronización en Tiempo Real: Construida como una Progressive Web App (PWA) en HTML/JS puro y Firebase Firestore. Aprovecha los 'snapshot listeners' en tiempo real para calcular y actualizar instantáneamente los balances en todos los dispositivos activos."
          },
          {
            "en": "Identity & Security: Secure session management and seamless onboarding for multiple participants using Google OAuth 2.0 redirection.",
            "es": "Identidad y Seguridad: Gestión segura de sesiones e incorporación fluida de múltiples participantes mediante redirección de Google OAuth 2.0."
          },
          {
            "en": "Debt Simplification Algorithm: Implemented an automated cash-flow routing algorithm to minimize transaction counts (e.g., dynamically resolving complex circular debts between multiple users into direct, simplified peer-to-peer payments).",
            "es": "Algoritmo de Simplificación de Deudas: Implementación de un algoritmo de enrutamiento de flujo de caja para minimizar la cantidad de transacciones (ej. resolviendo dinámicamente deudas circulares complejas entre múltiples usuarios en pagos directos simplificados)."
          }
        ]
      },
      {
        "type": "text",
        "title": { "en": "Gamification & Engagement", "es": "Gamificación y Retención" },
        "body": {
          "en": "To make financial tracking engaging, the app introduces a playful 'Scam' (Estafa) mechanic, allowing users to formally request debt forgiveness which creditors can accept or reject. This drives a dynamic achievement system that awards humorous trophies based on user behavior analytics, such as 'Top Spender', 'The Scammer', or 'The Bad Scammer' (high rejection rate).",
          "es": "Para hacer el registro financiero más entretenido, la app introduce la mecánica lúdica de la 'Estafa', permitiendo a los usuarios solicitar el perdón de una deuda, el cual el acreedor puede aceptar o rechazar. Esto alimenta un sistema dinámico de logros que otorga trofeos jocosos basados en analíticas de comportamiento, como 'El que más gasta', 'El Estafador' o 'El mal estafador' (alta tasa de rechazo)."
        }
      }
    ],
    "links": [
      {
        "href": "https://github.com/MMRichter/pagadios",
        "variant": "secondary",
        "target": "_blank",
        "label": { "en": "View Source", "es": "Ver Código" }
      }
    ]
  },

  {
    "id": "telemetry",
    "title": {
      "en": "2023 - Vineyard Telemetry Fetcher",
      "es": "2023 - Recolector de telemetría para viñedo"
    },
    "status": {
      "kind": "prod",
      "label": { "en": "In Production", "es": "En producción" }
    },
    "stack": "Rust • JavaScript • Chart.js • REST APIs",
    "media": [
      {
        "src": "assets/img/projects/telemetry.png",
        "width": 1280,
        "height": 720,
        "alt": {
          "en": "Telemetry dashboard with a historical temperature chart",
          "es": "Panel de telemetría con un gráfico histórico de temperatura"
        },
        "caption": {
          "en": "Chart.js dashboard fed by the Rust data fetcher",
          "es": "Panel en Chart.js alimentado por el recolector de datos en Rust"
        }
      }
    ],
    "sections": [
      {
        "type": "text",
        "title": { "en": "The Problem", "es": "El problema" },
        "body": {
          "en": "A third-party agricultural software vendor provided insufficient historical data storage for field temperature sensors, limiting long-term climate analysis for a vineyard.",
          "es": "El software agrícola de un proveedor externo ofrecía almacenamiento histórico insuficiente para los sensores de temperatura de campo, limitando el análisis climático de largo plazo de un viñedo."
        }
      },
      {
        "type": "list",
        "title": { "en": "Solution & Execution", "es": "Solución y ejecución" },
        "items": [
          {
            "html": {
              "en": "Engineered a lightweight, high-performance data extraction service in <strong>Rust</strong> to automatically consume the vendor's REST API and safely pull data off-site.",
              "es": "Desarrollé un servicio de extracción de datos liviano y de alto rendimiento en <strong>Rust</strong> para consumir automáticamente la API REST del proveedor y extraer los datos de forma segura fuera del sitio."
            }
          },
          {
            "en": "Bypassed the storage constraints by creating a robust local data-store for historical telemetry persistence.",
            "es": "Eludí las limitaciones de almacenamiento creando un almacén de datos local robusto para persistir la telemetría histórica."
          },
          {
            "en": "Developed an interactive, web-based dashboard using JavaScript and Chart.js, allowing stakeholders to visualize long-term hardware sensor trends instantly.",
            "es": "Desarrollé un panel web interactivo con JavaScript y Chart.js para que los responsables visualicen al instante las tendencias históricas de los sensores."
          }
        ]
      },
      {
        "type": "flow",
        "body": {
          "en": "Field Sensor → Vendor API → Rust Telemetry Fetcher → Local Storage → JS Dashboard",
          "es": "Sensor de campo → API del proveedor → Recolector Rust → Almacenamiento local → Panel JS"
        }
      }
    ],
    "links": []
  }
];