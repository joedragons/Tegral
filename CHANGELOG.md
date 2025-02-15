# Changelog

All notable changes to this project will be documented in this file.

The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] (0.0.4)

### Added

- `tegral-di-core`

  - **Experimental** Added functional component definitions (fundefs).

- `tegral-openapi-dsl`

  - Added the ability to add headers to API responses.

- `tegral-web-config`

  - Web configuration was made optional: it is no longer mandatory to have a configuration file. If no configuration file is found, a default configuration will be loaded instead.

### Changed

- `tegral-config-core`

  - Sectioned configurations can now be completely absent. If all of the registered sections are optional, this will lead to a default configuration being created.

- Dependency updates (transient libraries)

| Dependency | Old version | New version | Changelog(s) |
| ---------- | ----------- | ----------- | ---------- |
| Hoplite | 2.5.2 | 2.7.1 | [All](https://github.com/sksamuel/hoplite/blob/master/changelog.md) |
| MockK | 1.12.5 | 1.13.4 | [1.12.6](https://github.com/mockk/mockk/releases/tag/1.12.6) [1.12.7](https://github.com/mockk/mockk/releases/tag/1.12.7) [1.12.8](https://github.com/mockk/mockk/releases/tag/v1.12.8) [1.13.1](https://github.com/mockk/mockk/releases/tag/1.13.1) [1.13.2](https://github.com/mockk/mockk/releases/tag/1.13.2) [1.13.3](https://github.com/mockk/mockk/releases/tag/1.13.3) [1.13.4](https://github.com/mockk/mockk/releases/tag/v1.13.4) |
| Ktor | 2.1.0 | 2.2.3 | [2.1.x](https://ktor.io/changelog/2.1/) [2.2.x](https://ktor.io/changelog/2.2) |
| Swagger Core | 2.2.2 | 2.2.8 | [2.2.3](https://github.com/swagger-api/swagger-core/releases/tag/v2.2.3) [2.2.4](https://github.com/swagger-api/swagger-core/releases/tag/v2.2.4) [2.2.5](https://github.com/swagger-api/swagger-core/releases/tag/v2.2.5) [2.2.6](https://github.com/swagger-api/swagger-core/releases/tag/v2.2.6) [2.2.7](https://github.com/swagger-api/swagger-core/releases/tag/v2.2.7) [2.2.8](https://github.com/swagger-api/swagger-core/releases/tag/v2.2.8)
| Kotlin | 1.7.10 | 1.8.10 | [1.8 highlights](https://kotlinlang.org/docs/whatsnew18.html)
| JUnit | 5.9.0 | 5.9.2 | [All](https://junit.org/junit5/docs/5.9.2/release-notes/) |
| Swagger UI | 4.13.2 | 4.15.5 | [4.14.0](https://github.com/swagger-api/swagger-ui/releases/tag/v4.14.0) [4.14.1](https://github.com/swagger-api/swagger-ui/releases/tag/v4.14.1) [4.14.2](https://github.com/swagger-api/swagger-ui/releases/tag/v4.14.2) [4.14.3](https://github.com/swagger-api/swagger-ui/releases/tag/v4.14.3) [4.15.0](https://github.com/swagger-api/swagger-ui/releases/tag/v4.15.0) [4.15.1](https://github.com/swagger-api/swagger-ui/releases/tag/v4.15.1) [4.15.2](https://github.com/swagger-api/swagger-ui/releases/tag/v4.15.2) [4.15.3](https://github.com/swagger-api/swagger-ui/releases/tag/v4.15.3) |
| Logback | 1.2.11 | 1.4.5 | |

- Dependency updates (tooling)

| Dependency | Old version | New version | Changelog(s) |
| ---------- | ----------- | ----------- | ---------- |
| Gradle | 7.5 | 7.6 | [7.6](https://docs.gradle.org/current/release-notes.html) ] |
| Detekt | 1.21.0 | 1.22.0 | [1.22.0](https://github.com/detekt/detekt/releases/tag/v1.22.0) |
| Dokka | 1.7.10 | 1.7.20 | [1.7.20](https://github.com/Kotlin/dokka/releases/tag/v1.7.20)|

## [0.0.3] - 2022-10-01

### Added

- General

  - All packages can now be used with Java 11
    ([#45](https://github.com/utybo/Tegral/pull/45))

- `tegral-openapi-ktor-resources`

  - Initial release ([#43](https://github.com/utybo/Tegral/pull/43))

    - Provides a way of describing
      [Ktor resource classes](https://ktor.io/docs/type-safe-routing.html#resource_classes).

    - Contributed by [@serras](https://github.com/serras), thank you!

### Deprecated

- `tegral-di-core`

  - Deprecate the old `scope.factory()` syntax. Use `scope()` directly instead.
    ([#52](https://github.com/utybo/Tegral/pull/52))

### Fixed

- `tegral-openapi-core`

  - Fixed the way media type examples are handled (specifically,
    properly handle cases where it is null vs when it is unset).
    ([#41](https://github.com/utybo/Tegral/pull/41))

- `tegral-web-appdsl`

  - Properly expose both `RootConfig` and the custom configuration class (if
    any) ([#41](https://github.com/utybo/Tegral/pull/49))

## [0.0.2] - 2022-08-14

### Added

- `tegral-core`

  - Added `tegralVersion` property that provides the current version of
    Tegral ([#10](https://github.com/utybo/Tegral/pull/10))

- `tegral-di-core`

  - Added an identifier resolution system to injection environments. This
    unlocks more advanced use-cases, such as proper factories without
    `scope.factory()` or aliasing.
    ([#23](https://github.com/utybo/Tegral/pull/23))

  - Added `putAlias` and aliases.
    ([#23](https://github.com/utybo/Tegral/pull/23))

  - Added an `EnvironmentComponents` type alias.
    ([#23](https://github.com/utybo/Tegral/pull/23))

  - Added `filterSubclassesOf` function, which is especially useful for
    writing extensions. ([#23](https://github.com/utybo/Tegral/pull/23))

    - `filterSubclassesOf` also properly works with Proxies (e.g. MockK mocks)
      ([#29](https://github.com/utybo/Tegral/pull/29))

- `tegral-di-test`

  - `UnsafeMutableEnvironment` is now an extensible environment.
    ([#16](https://github/utybo/Tegral/pull/16))

  - Added `entryOf` utility function.
    ([#16](https://github/utybo/Tegral/pull/16))

  - Utility classes for testing environments' behavior (`EnvironmentBaseTest`,
    `ExtensibleEnvironmentBaseTest` and `NotExtensibleEnvironmentBaseTest`).
    ([#16](https://github/utybo/Tegral/pull/16))

- `tegral-featureful`

  - Added `LifecycleHookedFeature`, which allows you to create features
    that listen to specific "hooks" outside of the regular start-stop
    cycle. This should be used carefully and are mostly intended for
    "low-level" operations.
    ([#10](https://github.com/utybo/Tegral/pull/10))

- `tegral-logging`

  - Added logging configuration. You can now configure loggers directly
    in your `tegral.toml` -- Logback will be configured accordingly.
    ([#10](https://github.com/utybo/Tegral/pull/10))

  - Added a `putLoggerFactory` function to easily add factories to any
    environment, especially ones that do not have features support.
    ([#29](https://github.com/utybo/Tegral/pull/29))

- `tegral-openapi-cli`

  - Initial release ([#32](https://github.com/utybo/Tegral/pull/32))

    - Provides a command line interface for converting `*.openapi.kts`
      scripts into OpenAPI JSON and YAML files.

- `tegral-openapi-dsl`

  - Initial release ([#32](https://github.com/utybo/Tegral/pull/32))

    - Provides a Kotlin DSL for writing OpenAPI documents

- `tegral-openapi-feature`

  - Initial release ([#32](https://github.com/utybo/Tegral/pull/32))

    - Tegral feature that integrates the Ktor plugins into Tegral Web applications

- `tegral-openapi-ktor`

  - Initial release ([#32](https://github.com/utybo/Tegral/pull/32))

    - Ktor plugin for describing endpoints and serving OpenAPI documents
      from a Ktor application.

- `tegral-openapi-ktorui`

  - Initial release ([#32](https://github.com/utybo/Tegral/pull/32))

    - Ktor plugin that serves Swagger UI from a Ktor application.

- `tegral-openapi-scriptdef`

  - Initial release ([#32](https://github.com/utybo/Tegral/pull/32))

    - Kotlin scripting definitions for `*.openapi.kts` scripts.

- `tegral-openapi-scripthost`

  - Initial release ([#32](https://github.com/utybo/Tegral/pull/32))

    - Allows you to evaluate `*.openapi.kts` scripts.

- `tegral-web-appdefaults`

  - Added `ObjectMapper.defaultTegralConfiguration()` function, which lets you
    apply Tegral's defaults to your own object mappers.
    ([#17](https://github.com/utybo/Tegral/pull/17))

  - Added an automatic default configuration for logging. This creates a
    better logging experience out of the box than the Logback defaults.
    ([#10](https://github.com/utybo/Tegral/pull/10))

  - Tegral will now stop all services when receiving a shutdown hook from the
    JVM (done via the `ShutdownHookService`).
    ([#29](https://github.com/utybo/Tegral/pull/29))

- `tegral-web-appdsl`

  - Added `TegralApplication.stop()` ([#19](https://github/utybo/Tegral/pull/19))

  - Added bindings for the new automatic default configuration for
    logging. You can disable this custom logging by passing an argument
    in the `tegral` function.
    ([#10](https://github.com/utybo/Tegral/pull/10))

  - Added the ability to disable AppDefaults. Passing
    `enableDefaults = false` to the `tegral` will not call AppDefaults'
    `applyDefaults()` function and will not install the various default
    features and configurations.
    ([#10](https://github.com/utybo/Tegral/pull/10))

  - The `tegral` block will now print more useful information as well as
    statistics on startup.
    ([#10](https://github.com/utybo/Tegral/pull/10))

  - Added `features` and `lifecycleFeatures` extension properties to
    `TegralAPplication`
    ([#10](https://github.com/utybo/Tegral/pull/10))

  - Added calls to the lifecycle hooked features where relevant
    ([#10](https://github.com/utybo/Tegral/pull/10))

- `tegral-web-apptest`

  - Initial release. ([#17](https://github.com/utybo/Tegral/pull/17))

- `tegral-web-controllers-test`

  - `client` instances will probably be configured to work out of the box
    against AppDefaults powered applications. For now, this means that JSON
    content will work out of the box.
    ([#17](https://github.com/utybo/Tegral/pull/17))

  - Added `DEFAULT_APP_SETUP_MODULE_PRIORITY` constant.
    ([#17](https://github.com/utybo/Tegral/pull/17))

- `tegral-web-greeter`

  - Initial release ([#10](https://github.com/utybo/Tegral/pull/10))

    - Adds a simple greeting message when launching applications.

### Changed

- General

  - Bumped Ktor version to version 2.0.3
    ([#17](https://github/utybo/Tegral/pull/17))

  - Bumped Kotlin version to 1.7.10
    ([#27](https://github.com/utybo/Tegral/pull/27))

  - Bumped Gradle version to 7.5
    ([#27](https://github.com/utybo/Tegral/pull/27))

  - Bumped Hoplite version to 2.3.3
    ([#10](https://github.com/utybo/Tegral/pull/10))

- `tegral-di-core`

  - **Breaking change:** You no longer need to write `scope.factory()` to
    retrieve elements generated by a factory. You can just use `scope()`
    instead. ([#23](https://github.com/utybo/Tegral/pull/23))

  - Regular, non-extensible injection environments are now also required
    to implement a `getAllIdentifiers` function.
    ([#10](https://github.com/utybo/Tegral/pull/10))

    - `EagerImmutableMetaEnvironment` has been updated to implement this.

  - Declarations now come in two kinds: supplier declarations (with `put`) and
    resolvable declarations (for special declarations that will be turned into a
    non-simple injection resolver, such as aliases or factories).
    ([#23](https://github.com/utybo/Tegral/pull/23))

  - Factories now use resolvable identifiers instead of a wrapper with `wrapIn`.
    This means that they now respect the early or lazy injection system from the
    environment. ([#23](https://github.com/utybo/Tegral/pull/23))

  - Built-in environments and checks have been updated to fully support
    resolving ([#23](https://github.com/utybo/Tegral/pull/23)).

    - `EagerImmutableMetaEnvironment` now uses a two-step build, with a first
      step instantiating resolvers, and a second step actually resolving
      everything.

  - `tegralDi` now takes an additional, optional `metaEnvironmentKind` parameter
    when creating extensible environments.
    ([#16](https://github/utybo/Tegral/pull/16))

  - `InjectionEnvironmentKind<E>` interface is now a functional interface.
    ([#16](https://github/utybo/Tegral/pull/16))

  - `createMetaEnvironment` function now returns the correct type of
    `InjectionEnvironment`, determined via the generic parameter of
    `InjectionEnvironmentKind` ([#16](https://github/utybo/Tegral/pull/16))

- `tegral-di-test`

  - Adapted `UnsafeMutableEnvironment` for the new resolution mechanism.
    ([#23](https://github.com/utybo/Tegral/pull/23))

  - Adapted checks for the new resolution mechanism.
    ([#23](https://github.com/utybo/Tegral/pull/23))
    - As a rule of thumb, in all "graph-like" representations on check failures,
      `-->` arrows represent a regular injection dependency, while `R->`
      represents resolution-time dependencies.
    - `complete` will report missing resolution-time dependencies.
    - `noCycle` will report cyclic dependencies, no matter whether they are
      caused by regular injections or resolution-time dependencies.
    - `noUnused` will consider resolution-time dependencies as used.
    - Safe injection check will ignore resolution-time dependencies.
    - `DependencyTrackingInjectionEnvironment` has been updated to provide
      insights on dependencies.

  - Added more tests in `(Extensible)EnvironmentBaseTest` for new
    resolution behaviors, including aliases and proper parent
    resolution. ([#23](https://github.com/utybo/Tegral/pull/23))

- `tegral-web-appdefaults`

  - Split declaration of default Ktor configuration into a separate Ktor module.
    This means that AppDefaults no longer does anything in its `setup` function.
    This was done for compatibility with integration testing.
    ([#17](https://github/utybo/Tegral/pull/17)))

- `tegral-web-appdsl`

  - `TegralApplication.start()` is now a suspending function.
    ([#19](https://github/utybo/Tegral/pull/19))

- `tegral-web-controllers`

  - Made some `KtorApplicationSettings` properties public: `engine`, `port`,
    `host`, `watchPaths` ([#19](https://github/utybo/Tegral/pull/19))

### Removed

- `tegral-web-controllers`

  - **Breaking change:** `KtorApplication.setup()` has been removed due to
    incompatibility with integration testing. Use a regular module instead,
    making it high-priority if necessary.
    ([#36](https://github.com/utybo/Tegral/pull/36))

### Fixed

- `tegral-di-services`

  - The services extension now properly detects services where the "advertised"
    type is not a `TegralService`, but the type of the actual object is. For
    example, if you have a `put<Contract>(::Implementation)` declaration, the
    services extension will properly detect services even if only
    `Implementation` implements `TegralService`.
    ([#23](https://github.com/utybo/Tegral/pull/23))

  - The services extension now properly detects services that are actually
    mocks. ([#29](https://github.com/utybo/Tegral/pull/29))

- `tegral-di-test`

  - Fixed the error message when not using any DI check in a DI block showing
    the old Shedinja way of adding rules.
    ([#29](https://github.com/utybo/Tegral/pull/29))

## [0.0.1] - 2022-06-02

Initial release of Tegral.

### Added

- `tegral-catalog`
  - Initial release
- `tegral-config`
  - Initial release
- `tegral-core`
  - Initial release
- `tegral-di-core`
  - Initial release
- `tegral-di-services`
  - Initial release
- `tegral-di-test`
  - Initial release
- `tegral-di-test-mockk`
  - Initial release
- `tegral-featureful`
  - Initial release
- `tegral-logging`
  - Initial release
- `tegral-services-api`
  - Initial release
- `tegral-services-feature`
  - Initial release
- `tegral-web-appdefaults`
  - Initial release
- `tegral-web-appdsl`
  - Initial release
- `tegral-web-config`
  - Initial release
- `tegral-web-controllers`
  - Initial release
- `tegral-web-controllers-test`
  - Initial release

[Unreleased]: https://github.com/utybo/Tegral/compare/v0.0.3..main
[0.0.3]: https://github.com/utybo/Tegral/compare/v0.0.2..v0.0.3
[0.0.2]: https://github.com/utybo/Tegral/compare/v0.0.1..v0.0.2
[0.0.1]: https://github.com/utybo/Tegral/compare/v0.0.1
