import { ResolverMetadata, ClassMetadata, FieldMetadata, ParamMetadata, FieldResolverMetadata, AuthorizedMetadata, EnumMetadata, UnionMetadata, UnionMetadataWithSymbol, ResolverClassMetadata, SubscriptionResolverMetadata, MiddlewareMetadata } from "./definitions";
import { ObjectClassMetadata } from "./definitions/object-class-metdata";
import { InterfaceClassMetadata } from "./definitions/interface-class-metadata";
export declare class MetadataStorage {
    queries: ResolverMetadata[];
    mutations: ResolverMetadata[];
    subscriptions: SubscriptionResolverMetadata[];
    fieldResolvers: FieldResolverMetadata[];
    objectTypes: ObjectClassMetadata[];
    inputTypes: ClassMetadata[];
    argumentTypes: ClassMetadata[];
    interfaceTypes: InterfaceClassMetadata[];
    authorizedFields: AuthorizedMetadata[];
    enums: EnumMetadata[];
    unions: UnionMetadataWithSymbol[];
    middlewares: MiddlewareMetadata[];
    private resolverClasses;
    private fields;
    private params;
    constructor();
    collectQueryHandlerMetadata(definition: ResolverMetadata): void;
    collectMutationHandlerMetadata(definition: ResolverMetadata): void;
    collectSubscriptionHandlerMetadata(definition: SubscriptionResolverMetadata): void;
    collectFieldResolverMetadata(definition: FieldResolverMetadata): void;
    collectObjectMetadata(definition: ObjectClassMetadata): void;
    collectInputMetadata(definition: ClassMetadata): void;
    collectArgsMetadata(definition: ClassMetadata): void;
    collectInterfaceMetadata(definition: InterfaceClassMetadata): void;
    collectAuthorizedFieldMetadata(definition: AuthorizedMetadata): void;
    collectEnumMetadata(definition: EnumMetadata): void;
    collectUnionMetadata(definition: UnionMetadata): symbol;
    collectMiddlewareMetadata(definition: MiddlewareMetadata): void;
    collectResolverClassMetadata(definition: ResolverClassMetadata): void;
    collectClassFieldMetadata(definition: FieldMetadata): void;
    collectHandlerParamMetadata(definition: ParamMetadata): void;
    build(): void;
    clear(): void;
    private buildClassMetadata;
    private buildResolversMetadata;
    private buildFieldResolverMetadata;
    private buildExtendedResolversMetadata;
    private findFieldRoles;
}
