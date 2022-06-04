/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package guru.zoroark.tegral.examples.simplejsonapi

import guru.zoroark.tegral.di.dsl.put
import guru.zoroark.tegral.di.dsl.tegralDiModule
import guru.zoroark.tegral.di.environment.InjectionScope
import guru.zoroark.tegral.di.environment.invoke
import guru.zoroark.tegral.web.appdsl.tegral
import guru.zoroark.tegral.web.controllers.KtorController
import io.ktor.server.application.call
import io.ktor.server.response.respond
import io.ktor.server.routing.Routing
import io.ktor.server.routing.get

data class Greeting(val greeting: String, val recipient: String)

class GreetingService {
    fun greet(who: String?): Greeting = Greeting("hello", who ?: "world")
}

class GreetingController(scope: InjectionScope) : KtorController() {
    private val service: GreetingService by scope()

    override fun Routing.install() {
        get("/greet") {
            call.respond(service.greet(null))
        }

        get("/greet/{who}") {
            call.respond(service.greet(call.parameters["who"]!!))
        }
    }
}

val appModule = tegralDiModule {
    put(::GreetingService)
    put(::GreetingController)
}

fun main() {
    tegral {
        put(appModule)
    }
}
